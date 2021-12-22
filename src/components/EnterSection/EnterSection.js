import React, { useEffect, useState } from "react";
import "./EnterSection.css";
import "../../App.css";
import { Link } from "react-router-dom";

import enter from "../../assetsIMG/enter.png";
import video1 from "../../video/Video.mp4";
import WOW from "wowjs";
import { NavbarSection } from "../NavbarSection/NavbarSection";
export const EnterSection = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    new WOW.WOW().init({ live: false });
  }, []);
  return (
    <>
      <div className="enter-bg-image">
        <video
          autoPlay="autoplay"
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "50%",
            left: "50%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={video1} type="video/mp4" />
        </video>
        {visible == true ? (
          <div id="boxex">
            <div
              className={
                visible == false ? "enter-box wow fadeInDownBig " : "enter-box"
              }
              data-wow-delay={visible == false ? ".50s" : null}
            >
              <div className="enter-box-image">
                <img src={enter} />
              </div>
              <button
                onClick={() => {
                  setVisible(false);
                }}
                className="btn-enter"
              >
                Enter
              </button>
            </div>
          </div>
          
        ) : (
          <NavbarSection />
        )}
      </div>
    </>
  );
};
