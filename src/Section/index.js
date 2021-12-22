import React from "react";
import { BubbleGhost } from "../components/BubbleGhost/BubbleGhost";
import { RoadMapSectionComming } from "../components/RoadMapSectionComming/RoadMapSectionComming";
import { CommunitySection } from "../components/CommunitySection/CommunitySection";
import { FooterSectionComming } from "../components/FooterSectionComming/FooterSectionComming";

export const Section = () => {
  return (
    <div>
      <div className="box-all">
        <BubbleGhost />
        <RoadMapSectionComming />
        <CommunitySection />
        <FooterSectionComming />
      </div>
    </div>
  );
};
