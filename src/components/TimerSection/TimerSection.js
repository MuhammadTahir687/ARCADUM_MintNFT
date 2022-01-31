import React, { useEffect, useState } from "react";
import "./TimerSection.css";
import "../../App.css";

const TimerSection = () => {
  const [timer, setTimer] = useState("");
  var preSale = "2022-02-03T19:00:00Z";

  var mainSale = "2022-02-15T19:00:00Z";

  var dest = new Date().getTime();
  // console.log(dest);
  useEffect(() => {
    if (dest > 1643914800000) {
      dest = new Date(mainSale).getTime();
    } else {
      dest = new Date(preSale).getTime();
    }

    setInterval(() => {
      var now = new Date().getTime();
      var diff = dest - now;
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mint = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimer(days + " : " + hours + " : " + mint + " : " + seconds);
    }, 1000);
  }, [dest]);

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
          from the Systems you know and love.
        </p>

        <h2>{timer}</h2>

        <h4>
          public sale starts
          <br />
          february 03rd 7pm est
        </h4>
      </div>
    </div>
  );
};
export default TimerSection;
