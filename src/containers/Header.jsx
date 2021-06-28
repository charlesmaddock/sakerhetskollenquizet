import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

// Custom components
import {
  AlignCenter,
  Logo,
  StyledNavLink,
  DropDown,
} from "../components/general";
import ToggleLanguage from "../components/features/ToggleLanguage";
import { getWindowSize } from "../util";

const navigationRoutes = [
  //{ to: "/", title: "Home" },
  //{ to: "/about", title: "About" },
];

export default () => {
  return (
    <AlignCenter>
      <div
        style={{ width: "100%", margin: "10px 0", background: "rgba(0,0,0,0)" }}
      >
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <StyledNavLink exact to="/">
              <Logo />
            </StyledNavLink>
          </Grid>
          <NavBar />
        </Grid>
      </div>
    </AlignCenter>
  );
};

const NavBar = () => {
  const windowSize = getWindowSize();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  if (windowSize.width < 600) {
    return (
      <BurgerMenu
        open={open}
        handleClose={handleClose}
        handleToggle={handleToggle}
        anchorRef={anchorRef}
      />
    );
  } else {
    return (
      <Grid item>
        <Grid container>
          {navigationRoutes.map((navigationInfo) => {
            return (
              <Grid item>
                <StyledNavLink
                  exact
                  to={navigationInfo.to}
                  style={{ paddingLeft: 24 }}
                >
                  {navigationInfo.title}
                </StyledNavLink>
              </Grid>
            );
          })}
          <ToggleLanguage />
        </Grid>
      </Grid>
    );
  }
};

const BurgerMenu = ({ anchorRef, handleToggle, handleClose, open }) => {
  return (
    <DropDown
      open={open}
      handleClose={handleClose}
      handleToggle={handleToggle}
      anchorRef={anchorRef}
      icon={<MenuIcon />}
    >
      <MenuList autoFocusItem={open} id="menu-list-grow">
        {navigationRoutes.map((navigationInfo) => {
          return (
            <DropDownMenuItem
              title={navigationInfo.title}
              path={navigationInfo.to}
              handleClose={handleClose}
            />
          );
        })}
      </MenuList>
    </DropDown>
  );
};

const DropDownMenuItem = ({ title, path, handleClose }) => (
  <MenuItem style={{ padding: 0 }} onClick={handleClose}>
    <StyledNavLink
      exact
      to={path}
      style={{ width: "100%", padding: "10px 20px" }}
    >
      {title}
    </StyledNavLink>
  </MenuItem>
);
