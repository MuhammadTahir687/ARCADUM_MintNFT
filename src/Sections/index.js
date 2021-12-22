import React from "react";
import { TimerSection } from "../components/TimerSection/TimerSection";
import { BubbleGhost } from "../components/BubbleGhost/BubbleGhost";
import { CarouselSection } from "../components/CarouselSection/CarouselSection";
import { RoadMapSection } from "../components/RoadMapSection/RoadMapSection";
import { TeamCreativeSection } from "../components/TeamCreativeSection/TeamCreativeSection";
import { TeamMemberSection } from "../components/TeamMemberSection/TeamMemberSection";
import { CommunitySection } from "../components/CommunitySection/CommunitySection";
import { FooterSection } from "../components/FooterSection/FooterSection";


export const Sections = () => {
  return (
    <div>
      <TimerSection />
      <div className="box-all">
        <BubbleGhost />
        <CarouselSection />
        <RoadMapSection />
        <TeamCreativeSection />
        <TeamMemberSection />
        <CommunitySection />
        <FooterSection />
        
      </div>
    </div>
  );
};
