import React from "react";
import "./CommunitySection.css";
import "../../App.css";
export const CommunitySection = () => {
  return (
    <div className="cuminty">
      <div className="container">
        <div className="join-communitysection">
          <div className="join-subheading">
            <h1>Join the Community</h1>
            <p>
              Follow the latest drops and updates with our community groups.
              <br />
              Learn about the latest product releases and insights.
            </p>
            <a
              href="https://discord.com/channels/914886027536138270/915243460745912390"
              target="_blank"
            >
              <button className="join-button">Join our Discord</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
