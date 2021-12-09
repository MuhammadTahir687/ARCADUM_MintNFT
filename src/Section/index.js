import React from "react";
import { BubbleGhost } from "../components/BubbleGhost/BubbleGhost";
import { RoadMapSection } from "../components/RoadMapSection/RoadMapSection";
import { CommunitySection } from "../components/CommunitySection/CommunitySection";
import { FooterSectionComming } from "../components/FooterSectionComming/FooterSectionComming";

export const Section = () => {
  return (
    <div>
      <div className="box-all">
        <BubbleGhost />
        <RoadMapSection />
        <CommunitySection />
        <FooterSectionComming />
      </div>
    </div>
  );
};
