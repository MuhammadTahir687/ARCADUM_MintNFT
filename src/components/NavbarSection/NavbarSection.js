import React, { useEffect, useState } from "react";

import { Sections } from "../../Sections";
import opensea from "../../assetsIMG/opensea w.png";
import opensea2 from "../../assetsIMG/opensea.png";
import discord2 from "../../assetsIMG/discord2.png";
import discord from "../../assetsIMG/discord.png";
import "./NavbarSection.css";
import "../../App.css";
import "../TimerSection/TimerSection.css";
import "../CommingSoonSection/CommingSoonSection.css";
import music from "../../assetsIMG/pause.png";
import playing from "../../assetsIMG/play.png";
import audio from "../../Audio/I Cry Night after Night (Instrumental) - The Egyptian Lover.mp3";
import classic from "../../assetsIMG/classic.png";
import header from "../../assetsIMG/Header.png";
import arcade from "../../assetsIMG/Arcade.png";
import artboard from "../../assetsIMG/E44.png";
import Artboard2 from "../../assetsIMG/Artboard 2.png";
import Artboard3 from "../../assetsIMG/Artboard 3.png";
import artboard4 from "../../assetsIMG/Artboard 4.png";
import { CommingSoonSection } from "../CommingSoonSection/CommingSoonSection";
import Music from "../../music";
import WOW from "wowjs";

import { Modal } from "react-bootstrap";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";

export const NavbarSection = ({ prop }) => {
  const [show, setShow] = useState(false);
  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [play, setPlay] = useState(true);
  // const [states, setStates] = useState(opensea);
  const [cord, setCord] = useState(discord);
  useEffect(() => {
    new WOW.WOW().init({ live: false });
  }, []);

  const handleClick = (e) => {
    setVisibl(true);
    setScroll(!scroll);
  };

  useEffect(() => {
    document.getElementById("pageSections").scrollIntoView({
      behavior: "smooth",
    });
  }, [scroll]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 6000);
  // }, []);

  // const handleMouseOver = () => {
  //   setStates(opensea2);
  // };

  // const handleMouseOut = () => {
  //   setStates(opensea);
  // };

  const disMouseOver = () => {
    setCord(discord2);
  };

  const disMouseOut = () => {
    setCord(discord);
  };

  return (
    <>
      <Modal fullscreen={true} show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <CommingSoonSection />
          <div className="close" onClick={() => setShow(false)}>
            <button className="btn-close-comming">X</button>
          </div>
        </Modal.Body>
      </Modal>

      <div className="navbar-section" id="nav">
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
                  Pre-Sale
                </div>
              </Nav>
              <Nav className="wow fadeInRightBig " data-wow-delay=".50s">
                <ul className="button-header">
                  <li>
                    <a href="https://twitter.com/arcadumverse" target="_blank">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href=""
                      onMouseOver={() => handleMouseOver()}
                      onMouseOut={() => handleMouseOut()}
                    >
                      <img className="opensea" src={states} />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://discord.com/channels/914886027536138270/915243460745912390"
                      target="_blank"
                      onMouseOver={() => disMouseOver()}
                      onMouseOut={() => disMouseOut()}
                    >
                      <img className="discord" src={cord} />
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
                      <a
                        href="https://twitter.com/arcadumverse"
                        target="_blank"
                      >
                        Twitter
                      </a>
                    </li>
                    {/* <li>
                      <a href="">OpenSea</a>
                    </li> */}
                    <li>
                      <a
                        href="https://discord.com/channels/914886027536138270/915243460745912390"
                        target="_blank"
                      >
                        DisCord
                      </a>
                    </li>
                  </ul>
                  <div
                    onClick={() => setShow(true)}
                    id="comming-soon-responsive"
                    className="wow fadeIn nav-link"
                    data-wow-delay=".50s"
                  >
                    Pre-Sale
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

        <div className="header">
          <div className="classic-image wow zoomIn" data-wow-delay=".50s">
            <img src={classic} alt="classic" />
          </div>
          <div className="header-image wow zoomIn" data-wow-delay=".50s">
            <img src={header} alt="header" />
          </div>
          <div className="left-image wow zoomIn" data-wow-delay=".50s">
            <h1>
              Game Ownership
              <br />{" "}
              <span>
                forever minted <br />
                on the blockchain
              </span>
            </h1>
          </div>
          <div className="right-image wow zoomIn" data-wow-delay=".50s">
            <h6 id="jan-sale">
              Public sale start
              <br />{" "}
              <span>
                feb 03
                <br />
                7pm est
              </span>
            </h6>
            <h6 id="jan-sale-responsive">
              Game Ownership
              <br />{" "}
              <span>
                forever minted <br />
                on the blockchain
              </span>
            </h6>
          </div>

          <div className="arcade-image wow fadeInUp" data-wow-delay=".50s">
            <img src={arcade} alt="header " />
            <div className="button-text ">
              <h4
                className="wow fadeInRightBig "
                data-wow-delay=".1s"
                onClick={() => handleClick()}
              >
                Press start
                <br /> to play
              </h4>
            </div>
          </div>
          <div
            className="artboard-image wow fadeInDownBig "
            data-wow-delay=".50s"
          >
            <img src={artboard} alt="image" />
          </div>

          {/* </Link> */}
          <div
            className="artboard-image-2 wow rotateIn "
            data-wow-delay="1.50s"
          >
            <img src={Artboard2} alt="image " />
          </div>
          <div
            className="artboard-image-22 wow fadeInRightBig "
            data-wow-delay=".50s"
          >
            <img src={Artboard2} alt="image" />
          </div>
          <div
            className="artboard-image-3 wow fadeInDownBig "
            data-wow-delay=".50s"
          >
            <img src={Artboard3} alt="image" />
          </div>
          <div
            className="artboard-image-4 wow fadeInUpBig "
            data-wow-delay=".50s"
          >
            <img src={artboard4} alt="image" />
          </div>
          <div
            className="artboard-image-6 wow fadeInUpBig "
            data-wow-delay=".50s"
          >
            <img src={Artboard3} alt="image" />
          </div>
          <div className="Bboxes">
            <div className="border-box-left "></div>
            <div className="border-box-right"></div>
          </div>
        </div>
      </div>
      <div id="pageSections">{visibl && <Sections />}</div>
    </>
  );
};
