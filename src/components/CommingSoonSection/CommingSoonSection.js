import React, { useState, useEffect } from "react";
import "./CommingSoonSection.css";
import "../../App.css";

import { Section } from "../../Section";
import audio from "../../Audio/I Cry Night after Night (Instrumental) - The Egyptian Lover.mp3";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import header from "../../assetsIMG/Header.png";
import music from "../../assetsIMG/MusicPlayer.png";
import arrow from "../../assetsIMG/Arrow.png";

export const CommingSoonSection = () => {
  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setVisibl(true);
    setScroll(!scroll);
  };

  const [play, setPlay] = useState(false);

  useEffect(() => {
    document.getElementById("pageSection").scrollIntoView({
      behavior: "smooth",
    });
  }, [scroll]);

  return (
    <div>
      <div className="srcool-Group" id="soon">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand>
              {/* <div className="close" onClick={() => setHide(true)}>
                <button className="btn-close">X</button>
              </div> */}
              <div
                onClick={() => {
                  setPlay(!play);
                  {
                    play == true
                      ? document.getElementById("myaudio").play()
                      : document.getElementById("myaudio").pause();
                  }
                }}
                className="wow fadeInLeftBig"
                data-wow-delay=".50s logo-img"
                id="logo-image-music"
              >
                <img src={music} alt="image" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="wow fadeInRightBig " data-wow-delay=".50s">
                <ul className="button-header">
                  <li>
                    <a href="">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
                <Button className="connect-wallet"> Connect Wallet </Button>
                <audio id="myaudio" src={audio} preload="auto"></audio>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="scrol-screen-subheading">
          <div
            className="header-image-comming wow zoomIn"
            data-wow-delay=".50s"
          >
            <img src={header} alt="header" />
          </div>
          <div className="scrool-timer text-center">
            <h2>0 : 00 : 00</h2>

            <h4>
              public slae starts
              <br />
              december 20th 7pm est
            </h4>
          </div>
          <div className="scrool-lorem text-center">
            <p>Own 1,987 unique in-game sprites</p>
            <button className="scrol-btn">Power Up</button>
            <div className="box-img" onClick={() => handleClick()}>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div id="pageSection">{visibl && <Section />}</div>
    </div>
  );
};
