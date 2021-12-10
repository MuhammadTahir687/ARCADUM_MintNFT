import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { EnterSection } from "./components/EnterSection/EnterSection";


function App() {
  return (
    <>
      <Router>
        <EnterSection />
      </Router>
    </>
  );
}

export default App;
