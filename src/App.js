import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { EnterSection } from "./components/EnterSection/EnterSection";
import { NavbarSection } from "./components/NavbarSection/NavbarSection";
import { TimerSection } from "./components/TimerSection/TimerSection";
import { BubbleGhost } from "./components/BubbleGhost/BubbleGhost";
import { CarouselSection } from "./components/CarouselSection/CarouselSection";
import { RoadMapSection } from "./components/RoadMapSection/RoadMapSection";

function App() {
  return (
    <>
      <Router>
        <EnterSection />
        <Route
          exact
          path="/start-play"
          component={() => (
            <>
              {" "}
              <TimerSection /> <BubbleGhost /> <CarouselSection />{" "}
              <RoadMapSection />
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
