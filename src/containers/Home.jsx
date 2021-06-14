// Third party
import React from "react";
import { withTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
// Custom
import { AlignCenter, Fade } from "../components/general";

const Home = ({ t }) => {
  return (
    <div>
      <AlignCenter>
        <Helmet>
          <title>{t("meta.homeTitle")}</title>
          <meta name="description" content={t("meta.homeDesc")} />
          <meta name="keywords" content={t("meta.keywords")} />
        </Helmet>
        <h1 style={{ width: "100%" }}>{t("home.title")}</h1>
        <p>{t("home.desc")}</p>
        <Fade>
          <p>{t("home.longTest")}</p>
        </Fade>
        <Fade>
          <p>{t("home.longTest")}</p>
        </Fade>
        <Fade>
          <p>{t("home.longTest")}</p>
        </Fade>
      </AlignCenter>
    </div>
  );
};

export default withTranslation("common")(Home);
