import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { EnterSection } from "./components/EnterSection/EnterSection";
import StoreCadumSection from "./components/StoreCadumSection/StoreCadumSection";
import { FooterSectionStore } from "./components/FooterSectionStore/FooterSectionStore";
import SubPageProduct from "./components/SubPageProduct/SubPageProduct";
import ScrollToTop from "./components/ScrollToTop";

const App=()=> {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Route exact path="/" component={() => <EnterSection />} />
        <Route
          exact
          path="/explore"
          component={() => (
            <>
              <div className="box-all">
                <StoreCadumSection />
              </div>
              <div className="box-all-footer">
                <FooterSectionStore />
              </div>
            </>
          )}
        />
        <Route
          exact
          path="/account"
          component={() => (
            <>
              <div className="subpage-image">
                <SubPageProduct />
              </div>
              <div className="box-all-footer">
                <FooterSectionStore />
              </div>
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
