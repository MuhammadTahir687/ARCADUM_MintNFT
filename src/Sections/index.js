import React from "react";
import TimerSection from "../components/TimerSection/TimerSection";
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
      <div className="timer-section-bubble_ghost">
        <div className="overlay">
          <TimerSection />
        </div>
      </div>
      <div className="box-all">
        <BubbleGhost />
        <CarouselSection
          className2="buy-drop-btn"
          to1="explore"
          className1="drop-btn"
        />
        <RoadMapSection />
        {/* <TeamCreativeSection />
        <TeamMemberSection /> */}
        <CommunitySection />
        <FooterSection />
      </div>
    </div>
  );
};
