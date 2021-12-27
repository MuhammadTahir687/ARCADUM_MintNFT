import React from "react";
import "./TimerSection.css";
import "../../App.css";

export const TimerSection = () => {
  return (
    <div className="timer-section py-5 " id="timer">
      <div className="subheading-timer">
        <h1>
          own an actual piece of the game <br />
          for the first time{" "}
        </h1>
        <p>
          If you grow up in the 1980s playing 8-bit and 16-bit game
          <br />
          you might be familiar with their unique visual style.
        </p>
        <p>
          Each artwork is original with its own color palette and creation
          <br />
          from the system you know and love.
        </p>

        <h2>0 : 00 : 00</h2>

        <h4>
          public sale starts
          <br />
          december 20th 7pm est
        </h4>
      </div>
    </div>
  );
};
