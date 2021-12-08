import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { component } from "./componentsAll/component";

import { EnterSection } from "./components/EnterSection/EnterSection";
import { NavbarSection } from "./components/NavbarSection/NavbarSection";
// import { TimerSection } from "./components/TimerSection/TimerSection";
// import { BubbleGhost } from "./components/BubbleGhost/BubbleGhost";
// import { CarouselSection } from "./components/CarouselSection/CarouselSection";
// import { RoadMapSection } from "./components/RoadMapSection/RoadMapSection";
// import { TeamCreativeSection } from "./components/TeamCreativeSection/TeamCreativeSection";
// import { TeamMemberSection } from "./components/TeamMemberSection/TeamMemberSection";
// import { CommunitySection } from "./components/CommunitySection/CommunitySection";
// import { FooterSection } from "./components/FooterSection/FooterSection";
import { CommingSoonSection } from "./components/CommingSoonSection/CommingSoonSection";

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
