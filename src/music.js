import React, { useState } from "react";
import music from "./assetsIMG/play.png";
import playing from "./assetsIMG/pause.png";

const Music = () => {
  const [play, setPlay] = useState(true);
  return (
    <>
      {play == false ? (
        <div
          className="music-play-audio wow fadeInLeftBig"
          data-wow-delay=".50s"
          id="play"
          onClick={() => {
            setPlay(true);
            document.getElementById("myaudio").play();
          }}
        >
          <img src={playing} alt="image" />
        </div>
      ) : (
        <div
          className="music-play-audio"
          id="play"
          onClick={() => {
            setPlay(false);
            document.getElementById("myaudio").pause();
          }}
        >
          <img src={music} alt="image" />
        </div>
      )}
    </>
  );
};
export default Music;
