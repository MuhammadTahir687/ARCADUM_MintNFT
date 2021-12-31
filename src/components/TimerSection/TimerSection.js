import React, { useEffect, useState } from "react";
import "./TimerSection.css";
import "../../App.css";

export const TimerSection = () => {
  useEffect(() => {
    var dest = new Date("jan 20, 2022 12:00:00").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();

      var diff = dest - now;
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mint = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML =
        days + " : " + hours + " : " + mint + " : " + seconds;
    }, 1000);
  }, []);

  return (
    <div className="timer-section py-5 " id="timer">
      <div className="subheading-timer">
        <h1>
          own an actual piece of the game <br />
          for the first time{" "}
        </h1>
        <p>
          If you grow up in the 1980s playing 8-bit and 16-bit GAMES
          <br />
          you might be familiar with their unique visual style.
        </p>
        <p>
          Each artwork is original with its own color palette and creation
          <br />
          from the S ystems you know and love.
        </p>

        <h2 id="demo"></h2>

        <h4>
          public sale starts
          <br />
          January 20th 7pm est
        </h4>
      </div>
    </div>
  );
};
