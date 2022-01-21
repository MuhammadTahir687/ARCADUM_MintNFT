import React from "react";
import { BubbleGhostComming } from "../components/BubbleGhostComming/BubbleGhostComming";
import { RoadMapSectionComming } from "../components/RoadMapSectionComming/RoadMapSectionComming";
import { CommunitySection } from "../components/CommunitySection/CommunitySection";
import { FooterSectionComming } from "../components/FooterSectionComming/FooterSectionComming";

export const Section = () => {
  return (
    <div>
      <div className="bubble-gosht-comming-section">
        <BubbleGhostComming />
      </div>
      <div className="box-all">
        <RoadMapSectionComming />
        <CommunitySection />
        <FooterSectionComming />
      </div>
    </div>
  );
};
