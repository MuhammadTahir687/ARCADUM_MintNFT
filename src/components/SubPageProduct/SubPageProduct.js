import React from "react";
import "./SubPageProduct.css";
import audio from "../../Audio/I Cry Night after Night (Instrumental) - The Egyptian Lover.mp3";

import { Row, Col, Navbar, Nav, Button, Container } from "react-bootstrap";
import subimage from "../../assetsIMG/sub-image.png";
import logo from "../../assetsIMG/logo.png";
import dis from "../../assetsIMG/discription.jpg";

export const SubPageProduct = () => {
  let names = [
    { name: "Product" },
    { name: "About" },
    { name: "Detail" },
    { name: "Rules" },
    { name: "Servies" },
  ];

  return (
    <div>
      <div className="sub-page" style={{ backgroundColor: "#070009" }}>
        <Navbar collapseOnSelect expand="lg" variant="dark" id="nav-web">
          <Container>
            <div
              className="wow fadeInLeftBig"
              data-wow-delay=".50s logo-img"
              id="store-cadum"
            >
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

        <Navbar collapseOnSelect expand="lg" variant="dark" id="nav-responsive">
          <Container>
            <Navbar.Brand>
              {/* <div
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
              </div> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="nav-color">
              <Nav className="me-auto"></Nav>
              <Nav
                id="nav-icon-responsive"
                className="wow fadeInRightBig "
                data-wow-delay=".50s"
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
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col sm={12} lg={6} md={6} className="sub-image-section">
              <div className="sub-image">
                <img src={subimage} alt="img" />
              </div>
            </Col>
            <Col sm={12} lg={6} md={6} className="sub-image-section">
              <div className="sub-page-section-heading">
                <span className="py-4">Lorem</span>
                <h2>Lorem ipsum </h2>
                <p>Remaining Amount: 0 / 5,218</p>
                <button type="button" disabled className="sub-button">
                  Solid Out
                </button>
              </div>
            </Col>
          </Row>

          <div className="product-description-section">
            <ul className="description-list">
              <li>Product Description</li>
              <li>About Artist</li>
              <li>Details</li>
              <li>Rules Introduction</li>
              <li>Servies Content</li>
            </ul>
            <Row>
              <Col sm={12} lg={12} md={12} className="product-description">
                <div className="descreption-image mb-5">
                  <img
                    src={dis}
                    alt="img"
                    style={{ backgroundColor: "#000" }}
                  />
                </div>
                <p>
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting,
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};
