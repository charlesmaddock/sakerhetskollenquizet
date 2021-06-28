// Third party
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// Custom components
import { Loading } from "../components/general";
import TestSlides from "../containers/TestSlides";
import Welcome from "../containers/Welcome";
// Lazy loading
const Header = lazy(() => import("../containers/Header"));
const Footer = lazy(() => import("../containers/Footer"));
const PageNotFound = lazy(() => import("../containers/PageNotFound.jsx"));

const Boiler = () => (
  <Suspense fallback={<Loading fullScreen />}>
    <div style={{ background: "lightblue" }}>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Welcome />} />
        <Route path="/test" exact render={() => <TestSlides />} />
        <Route render={(props) => <PageNotFound {...props} />} />
      </Switch>
      <Footer />
    </div>
  </Suspense>
);

export default Boiler;
