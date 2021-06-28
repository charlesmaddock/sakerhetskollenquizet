import React from "react";
import i18next from "i18next";
import { withTranslation } from "react-i18next";

function ToggleLanguage({ t }) {
  return (
    <div>
      <Flag lang="swe" emoji="🇸🇪" />
      <Flag lang="en" emoji="🇬🇧" />
    </div>
  );
}

const Flag = ({ emoji, lang }) => {
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <span
      style={{ margin: "0 6px", cursor: "pointer" }}
      onClick={() => changeLanguage(lang)}
      role="img"
      aria-label="sheep"
    >
      {emoji}
    </span>
  );
};

export default withTranslation()(ToggleLanguage);
