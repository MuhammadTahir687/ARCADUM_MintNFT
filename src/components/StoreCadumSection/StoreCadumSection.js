import React, { useEffect, useState } from "react";

import "./StoreCadumSection.css";
// import "./NavbarSection.css";
import { Row, Col, Container } from "react-bootstrap";

import logo from "../../assetsIMG/logo.png";
import bubble from "../../assetsIMG/BubbleGhost.png";
import arrow from "../../assetsIMG/Arrow.png";
import { Navbar, Nav, Button } from "react-bootstrap";
import arvideo from "../../video/arcadum.mp4";
import video from "../../video/VideoGame.mp4";

export const StoreCadumSection = () => {
  const [play, setPlay] = useState(false);

  const handleClick = () => {
    var video = document.getElementById("myVideo-1");
    video.play();
  };

  return (
    <>
      <div className="store-cadum" id="store">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <div className="wow fadeInLeftBig" data-wow-delay=".50s logo-img">
              <a href="/">
                <img src={logo} alt="image" />
              </a>
            </div>
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

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
                    devic and demons.
                  </p>
                  <button className="store-btn">
                    O.148 ETH | Buy Now{" "}
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </button>
                </div>
              </Col>
            </Row>
            <div className="store-arrow-btn">
              <img src={arrow} alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="store-video">
        <div className="container">
          <Row>
            <Col sm={12} lg={6} md={6}>
              <div className="video-store">
                <video loop id="myVideo-1" onClick={() => handleClick()}>
                  <source src={arvideo} type="video/mp4" />
                </video>
              </div>
            </Col>
            <Col sm={12} lg={6} md={6}>
              <div className="table-heading">
                <Row>
                  <Col sm={12} lg={7} md={7}>
                    <h6>ITEM</h6>
                  </Col>
                  <Col sm={12} lg={3} md={3}>
                    <h6>RARITY</h6>
                  </Col>
                  <Col sm={12} lg={2} md={2}>
                    <h6>EDITIONS</h6>
                  </Col>
                </Row>
              </div>

              <div className="table-heading-2">
                <Row className="border-bottom-2">
                  <Col sm={12} lg={7} md={7}>
                    <p>Bubble Ghost Waving - Animated Sprite</p>
                  </Col>
                  <Col sm={12} lg={3} md={3}>
                    <p>Secret</p>
                  </Col>
                  <Col sm={12} lg={2} md={2}>
                    <p>5</p>
                  </Col>
                </Row>
                <Row className="border-bottom-2">
                  <Col sm={12} lg={7} md={7}>
                    <p>Blowing a Bubble - Animated Sprite</p>
                  </Col>
                  <Col sm={12} lg={3} md={3}>
                    <p>Power-Up</p>
                  </Col>
                  <Col sm={12} lg={2} md={2}>
                    <p>100</p>
                  </Col>
                </Row>
                <Row className="border-bottom-2">
                  <Col sm={12} lg={7} md={7}>
                    <p>Bubble Ghost Floating Logo - Animated Sprite</p>
                  </Col>
                  <Col sm={12} lg={3} md={3}>
                    <p>Retro</p>
                  </Col>
                  <Col sm={12} lg={2} md={2}>
                    <p>800</p>
                  </Col>
                </Row>
                <Row className="border-bottom-1">
                  <Col sm={12} lg={7} md={7}>
                    <p>Bubble Ghost Screen - Animated</p>
                  </Col>
                  <Col sm={12} lg={3} md={3}>
                    <p>Classic</p>
                  </Col>
                  <Col sm={12} lg={2} md={2}>
                    <p>1082</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};