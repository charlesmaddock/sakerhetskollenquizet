// Third party
import React from "react";
import { withTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
// Custom
import { AlignCenter } from "../components/general";

const About = ({ t }) => {
  return (
    <div>
      <AlignCenter>
        <Helmet>
          <title>{t("meta.aboutTitle")}</title>
          <meta name="description" content={t("meta.aboutDesc")} />
          <meta name="keywords" content={t("meta.keywords")} />
        </Helmet>
        <h1>{t("about.title")}</h1>
        <p>{t("about.desc")}</p>
      </AlignCenter>
    </div>
  );
};

export default withTranslation("common")(About);
