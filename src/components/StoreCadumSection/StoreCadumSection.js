import React, { useEffect, useState } from "react";

import "./StoreCadumSection.css";
import { Row, Col, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import audio from "../../Audio/I Cry Night after Night (Instrumental) - The Egyptian Lover.mp3";
import logo from "../../assetsIMG/logo.png";
import bubble from "../../assetsIMG/BubbleGhost.png";
import arrow from "../../assetsIMG/Arrow.png";
import { Navbar, Nav, Button } from "react-bootstrap";

import music from "../../assetsIMG/pause.png";
import playing from "../../assetsIMG/play.png";

import artboard from "../../assetsIMG/E44.png";
import Artboard2 from "../../assetsIMG/Artboard 2.png";
import Artboard3 from "../../assetsIMG/Artboard 3.png";

import waving from "../../assetsIMG/Waving_ArCadum.png";
import blowing from "../../assetsIMG/BlowingBubbles_ArCadum.png";
import bubbleImage from "../../assetsIMG/BubbleGhostLogo_ArCadum.png";
import bubbleVideo from "../../assetsIMG/VideoGameImage.png";

export default function StoreCadumSection() {
  const [play, setPlay] = useState(true);
  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = (e) => {
    setVisibl(true);
    setScroll(!scroll);
  };

  return (
    <>
      <div className="store-cadum" id="store">
        <div className="overlay">
          <Row className="arcade-image-store">
            <Col sm={12} lg={12} md={12}>
              <img src={artboard} alt="image" />
            </Col>
          </Row>
          <Row className="arcade-image-store-12">
            <Col sm={12} lg={12} md={12}>
              <img src={Artboard2} alt="image" />
            </Col>
          </Row>
          <Navbar collapseOnSelect expand="lg" variant="dark" id="nav-web">
            <Container>
              <div
                className="wow fadeInLeftBig "
                data-wow-delay=".50s logo-img"
                id="store-cadum"
              >
                <a href="/">
                  <img src={logo} alt="image" />
                </a>
              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
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
                    class="music-play-audio"
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

          <Row className="arcade-image-store-1">
            <Col sm={12} lg={12} md={12}>
              <img src={Artboard2} alt="image" />
            </Col>
          </Row>
          <div className="container">
            <div className="store-subheading">
              <Row>
                <Col sm={12} lg={6} md={6} className="stor-random">
                  <div className="bubble-image-store">
                    <img src={bubble} alt="image" />
                  </div>
                  <p>
                    You will receive a random game sprite, you won't know
                    <br /> which sprite you will receive until after payment.
                  </p>
                </Col>
                <Col sm={12} lg={6} md={6}>
                  <div className="subheading-bubble-store">
                    <h2 className="pt-4">
                      <span>Bubble Ghost</span>(1987)
                    </h2>
                    <p>
                      In Bubble Ghost you must help a <br />
                      mischievous littele spook blow a <br />
                      delicate bubble through a <br />
                      castle filed with diabolical
                      <br />
                      devices and demons.
                    </p>
                    <button className="store-btn">
                      0.1 ETH | Buy Now{" "}
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                  </div>
                </Col>
              </Row>
              <Row className="arcade-image-store-2">
                <Col sm={12} lg={12} md={12}>
                  <img src={Artboard3} alt="image" />
                </Col>
              </Row>
              <Row className="arcade-image-store-22">
                <Col sm={12} lg={12} md={12}>
                  <img src={Artboard3} alt="image" />
                </Col>
              </Row>
              <div
                className="store-arrow-btn wobble-vertical-on-hover"
                onClick={() => handleClick()}
              >
                <img src={arrow} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="store-video" id="section-store">
        <div className="container">
          <Row>
            <Col sm={12} lg={6} md={6}>
              <div className="card">
                <Link to="/account?name=waving">
                  <div className="image-waving">
                    <img src={waving} alt="image" />
                  </div>
                </Link>
                <div className="button-bottom">
                  <button className="btn-waving">
                    <h6>Bubble Ghost Waving</h6>
                    <p>0.1 ETH</p>
                  </button>
                  <button className="btn-rarity">
                    <h6>Rarity</h6>
                    <p>Secret</p>
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6} md={6}>
              <div className="card">
                <Link to="/account?name=blowing">
                  <div className="image-waving">
                    <img src={blowing} alt="image" />
                  </div>
                </Link>
                <div className="button-bottom">
                  <button className="btn-waving">
                    <h6>Bubble Ghost Waving</h6>
                    <p>0.1 ETH</p>
                  </button>
                  <button className="btn-rarity">
                    <h6>Rarity</h6>
                    <p>Secret</p>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6} md={6}>
              <div className="card">
                <Link to="/account?name=bubble">
                  <div className="image-waving">
                    <img src={bubbleImage} alt="image" />
                  </div>
                </Link>
                <div className="button-bottom">
                  <button className="btn-waving">
                    <h6>Bubble Ghost Waving</h6>
                    <p>0.1 ETH</p>
                  </button>
                  <button className="btn-rarity">
                    <h6>Rarity</h6>
                    <p>Secret</p>
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6} md={6}>
              <div className="card">
                <Link to="/account?name=bubblevideo">
                  <div className="image-waving">
                    <img src={bubbleVideo} alt="image" />
                  </div>
                </Link>
                <div className="button-bottom">
                  <button className="btn-waving">
                    <h6>Bubble Ghost Waving</h6>
                    <p>0.1 ETH</p>
                  </button>
                  <button className="btn-rarity">
                    <h6>Rarity</h6>
                    <p>Secret</p>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
// }
