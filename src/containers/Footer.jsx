// Third party
import { Grid } from "@material-ui/core";
import React from "react";
import { withTranslation } from "react-i18next";
import InstagramIcon from "@material-ui/icons/Instagram";
// Custom
import { AlignCenter } from "../components/general";
import sakerhetskollen_logo from "../assets/sakerhetskollen_logo.svg";
import digitalungdom_logo from "../assets/digitalungdom_logo.png";
import { Facebook, Twitter } from "@material-ui/icons";

const Footer = ({ t }) => {
  return (
    <AlignCenter>
      <Grid container xs={12} justify="space-between">
        <Grid item style={{ height: 50 }}>
          <img alt="" src={sakerhetskollen_logo} />
          <img alt="" src={digitalungdom_logo} />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid container direction="row" alignItems="center">
              <p style={{ margin: 0, padding: "0 0 2px 0", color: "white" }}>
                Dela
              </p>
              <FooterLink icon={<InstagramIcon style={{ fontSize: 32 }} />} />
              <FooterLink icon={<Facebook style={{ fontSize: 32 }} />} />
              <FooterLink icon={<Twitter style={{ fontSize: 32 }} />} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AlignCenter>
  );
};

const FooterLink = ({ icon }) => (
  <div
    style={{
      cursor: "pointer",
      display: "inline-block",
      verticalAlign: "middle",
      color: "white",
      fontSize: 30,
    }}
  >
    {icon}
  </div>
);

export default withTranslation("common")(Footer);
