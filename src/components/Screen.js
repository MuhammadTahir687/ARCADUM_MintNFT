import React, { useEffect, useState } from "react";

import {
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Container,
  Offcanvas,
} from "react-bootstrap";

import music from "../assetsIMG/pause.png";
import playing from "../assetsIMG/play.png";

import logo from "../assetsIMG/logo.png";
import audio from "../Audio/I Cry Night after Night (Instrumental) - The Egyptian Lover.mp3";
import { Link } from "react-router-dom";
export const Screen = ({ wavingimage }) => {
  const [play, setPlay] = useState(true);
  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);

  return (
    <div>
      <div>
        <div className="sub-page" style={{ backgroundColor: "#070009" }}>
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

          <div className="subpage ">
            <Container>
              <Row>
                <Col sm={12} lg={6} md={6}>
                  <div className="card-sub">
                    <div className="image-waving-sub">
                      <img src={wavingimage} alt="image" />
                    </div>
                    <button className="btn-waving-sub">
                      <h6>Bubble Ghost Waving</h6>
                    </button>
                  </div>
                </Col>
                <Col sm={12} lg={6} md={6}>
                  <div className="discription">
                    <p>
                      <p>
                        Port history - The original Bubble Ghost was created on
                        an Atari ST computer. The game has been adapted for
                        other computers throughout the world.{" "}
                      </p>
                      <p>
                        {" "}
                        Some years later, ERE Informatique was bought by
                        Infogrames. Infogrames published a new version of Bubble
                        Ghost with updated graphics, Bubble + (Bubble Plus).
                      </p>

                      <p>
                        {" "}
                        A Game Boy version was published in 1990. It was the
                        first French game adapted for the Game Boy.
                      </p>
                    </p>
                  </div>
                  <div className="detail">
                    <div className="list-price">
                      <h6 className="head-6">List Price:</h6>
                      <p className="para-6">0.1 ETH</p>
                    </div>
                    <div className="list-price">
                      <h6 className="head-6">Drop Date:</h6>
                      <p className="para-6">February 3, 2022</p>
                    </div>
                    <div className="list-price">
                      <h6 className="head-6">Editions:</h6>
                      <p className="para-6">5</p>
                    </div>
                    <div className="list-price">
                      <h6 className="head-6">Origin:</h6>
                      <p className="para-6">Original game by Infogrames</p>
                    </div>
                    <div className="list-price">
                      <h6 className="head-6">Brand:</h6>
                      <p className="para-6">Bubble Ghost</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Link to="explore" className="back-to-menu">
                Back To Menu{" "}
                <i class="fa fa-angle-right mx-1" aria-hidden="true"></i>
              </Link>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};
