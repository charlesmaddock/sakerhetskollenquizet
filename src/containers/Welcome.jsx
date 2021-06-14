// Third party
import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Custom
import { AlignCenter, StyledButton } from "../components/general";
import { HEIGHT } from "../util/constants";

const Welcome = ({ t }) => (
  <div style={{ background: "lightblue", height: HEIGHT }}>
    <AlignCenter>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          padding: 20,
          marginTop: HEIGHT / 4,
        }}
      >
        <h1>{t("welcome.welcome")}</h1>
        <p>{t("welcome.desc")}</p>
        <p style={{ fontSize: "0.8em" }}>{t("general.madeByDU")}</p>
        <Link to="/test">
          <StyledButton>{t("welcome.test")}</StyledButton>
        </Link>
      </div>
    </AlignCenter>
  </div>
);

export default withTranslation("common")(Welcome);
