import React, { useEffect, useState } from "react";

import { Sections } from "../../Sections";

import "./NavbarSection.css";
import "../../App.css";
import "../TimerSection/TimerSection.css";
import "../CommingSoonSection/CommingSoonSection.css";
import logo from "../../assetsIMG/logo.png";
import classic from "../../assetsIMG/classic.png";
import header from "../../assetsIMG/Header.png";
import arcade from "../../assetsIMG/Arcade.png";
import artboard from "../../assetsIMG/E44.png";
import Artboard2 from "../../assetsIMG/Artboard 2.png";
import Artboard3 from "../../assetsIMG/Artboard 3.png";
import artboard4 from "../../assetsIMG/Artboard 4.png";
import { CommingSoonSection } from "../CommingSoonSection/CommingSoonSection";

import WOW from "wowjs";

import { Modal } from "react-bootstrap";

import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

export const NavbarSection = () => {
  const [show, setShow] = useState(false);
  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const [play, setPlay] = useState(false);
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

  useEffect(() => {
    // document.getElementById("pageSections").scrollIntoView({
    //   behavior: "smooth",
    // });
    setTimeout(() => {
      setShow(true);
    }, 6000);
  }, []);
  // clearInterval(myInterval);
  return (
    <>
      <Modal fullscreen={true} show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <CommingSoonSection />
          <div className="close" onClick={() => setShow(false)}>
            <button className="btn-close">X</button>
          </div>
        </Modal.Body>
      </Modal>

      <div className="navbar-section" id="nav">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <div
                className="wow fadeInLeftBig"
                data-wow-delay=".50s logo-img"
                id="logo-image"
              >
                <img src={logo} alt="image" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <div
                  onClick={() => setShow(true)}
                  // setInterval(() => {

                  // }, 1000)
                  // }
                  id="comming-soon"
                  className="wow fadeIn nav-link"
                  data-wow-delay=".50s"
                >
                  Comming Soon
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
                {/* {play == false ? (
                  <div
                    class="music-play"
                    id="play"
                    onClick={() => {
                      setPlay(true);
                      document.getElementById("myaudio").play();
                    }}
                  >
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </div>
                ) : (
                  <div
                    class="music-play"
                    id="play"
                    onClick={() => {
                      setPlay(false);
                      document.getElementById("myaudio").pause();
                    }}
                  >
                    <i class="fa fa-pause" aria-hidden="true"></i>
                  </div>
                )} */}
                {/* <audio
                  id="myaudio"
                  src="https://designshack.net/tutorialexamples/html5-audio-player/media/evidence-song.mp3"
                  preload="auto"
                ></audio> */}
              </Nav>
            </Navbar.Collapse>
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
            <h6>
              Public sale start
              <br />{" "}
              <span>
                december 20
                <br />
                7pm est x{" "}
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
