import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { EnterSection } from "./components/EnterSection/EnterSection";
import { StoreCadumSection } from "./components/StoreCadumSection/StoreCadumSection";
import { FooterSectionStore } from "./components/FooterSectionStore/FooterSectionStore";

function App() {
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          component={() => (
            <>
              {" "}
              <EnterSection />
            </>
          )}
        />

        <Route
          exact
          path="/explore"
          component={() => (
            <>
              {" "}
              <div className="box-all">
                <StoreCadumSection />
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
