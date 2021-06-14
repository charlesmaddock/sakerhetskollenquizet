import React from "react";
import i18next from "i18next";
import { withTranslation } from "react-i18next";

function ToggleLanguage({ t }) {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("swe")}>swe</button>
      <button onClick={() => changeLanguage("en")}>en</button>
    </div>
  );
}

export default withTranslation()(ToggleLanguage);
