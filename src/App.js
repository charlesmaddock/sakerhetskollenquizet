// Third party
import React from "react";
import Router from "./boiler/Router";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./index.css";

// Custom
import common_swe from "./translations/swe/common.json";
import common_en from "./translations/en/common.json";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a12345",
    },
  },
});

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    swe: {
      common: common_swe,
    },
  },
});

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
