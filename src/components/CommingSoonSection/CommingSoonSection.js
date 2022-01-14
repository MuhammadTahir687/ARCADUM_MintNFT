import React, { useState, useEffect } from "react";
import "./CommingSoonSection.css";
import "../../App.css";

import { Section } from "../../Section";
import audio from "../../Audio/I Cry Night after Night (Instrumental) - The Egyptian Lover.mp3";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import header from "../../assetsIMG/Header.png";
import music from "../../assetsIMG/pause.png";
import playing from "../../assetsIMG/play.png";
import arrow from "../../assetsIMG/Arrow.png";
import Music from "../../music";

export const CommingSoonSection = ({ onClick1, onClick2 }) => {
  useEffect(() => {
    var des = new Date("feb 03, 2022 00:00:00").getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var diff = des - now;
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mint = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimer(days + " : " + hours + " : " + mint + " : " + seconds);
    }, 1000);
  }, []);

  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [timer, setTimer] = useState("");

  const handleClick = () => {
    setVisibl(true);
    setScroll(!scroll);
  };

  const [play, setPlay] = useState();

  useEffect(() => {
    document.getElementById("pageSection").scrollIntoView({
      behavior: "smooth",
    });
  }, [scroll]);

  return (
    <div>
      <div className="srcool-Group" id="soon">
        <Navbar collapseOnSelect expand="lg" variant="dark" id="nav-web">
          <Container>
            <Navbar.Brand>
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
                  class="music-play-audio"
                  id="play"
                  onClick={() => {
                    setPlay(false);
                    document.getElementById("myaudio").pause();
                  }}
                >
                  <img src={music} alt="image" />
                </div>
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <div
                  onClick={() => setShow(true)}
                  id="comming-soon"
                  className="wow fadeIn nav-link"
                  data-wow-delay=".50s"
                >
                  Coming Soon
                </div>
              </Nav>
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

                <audio
                  autoplay="autoplay"
                  loop="loop"
                  id="myaudio"
                  src={audio}
                  preload="auto"
                ></audio>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar expand={false} id="nav-responsive">
          <Container fluid>
            <Navbar.Brand>
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
                  class="music-play-audio"
                  id="play"
                  onClick={() => {
                    setPlay(false);
                    document.getElementById("myaudio").pause();
                  }}
                >
                  <img src={music} alt="image" />
                </div>
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  id="nav-icon-responsive"
                >
                  <ul className="button-header-responsive">
                    <li>
                      <a href="">Twitter</a>
                    </li>
                    <li>
                      <a href="">OpenSea</a>
                    </li>
                    <li>
                      <a href="">DisCord</a>
                    </li>
                  </ul>
                  <div
                    onClick={() => setShow(true)}
                    id="comming-soon-responsive"
                    className="wow fadeIn nav-link"
                    data-wow-delay=".50s"
                  >
                    Coming Soon
                  </div>

                  <Button className="connect-wallet" id="connect-wallet">
                    {" "}
                    Connect Wallet{" "}
                  </Button>

                  <audio id="myaudio" src={audio} preload="auto"></audio>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
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
            <h2>{timer}</h2>

            <h4>
              public slae starts
              <br />
              february 03rd 7pm est
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
