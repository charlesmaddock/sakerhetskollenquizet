// Third party
import React from "react";
import { withTranslation } from "react-i18next";
// Custom
import { AlignCenter } from "../components/general";

const Home = () => {
  return (
    <div>
      <AlignCenter>
        <h1>404</h1>
      </AlignCenter>
    </div>
  );
};

export default withTranslation("common")(Home);
