import React from "react";
import "./SubPageProduct.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import audio from "../../Audio/I Cry Night after Night (Instrumental) - The Egyptian Lover.mp3";

import { Row, Col, Navbar, Nav, Button, Container } from "react-bootstrap";
import logo from "../../assetsIMG/logo.png";
import waving from "../../assetsIMG/Waving_ArCadum.png";
import blowing from "../../assetsIMG/BlowingBubbles_ArCadum.png";
import bubbleImage from "../../assetsIMG/BubbleGhostLogo_ArCadum.png";
import bubbleVideo from "../../assetsIMG/VideoGameImage.png";

import { Screen } from "../Screen";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SubPageProduct() {
  let query = useQuery();
  let idd = query.get("name");
  if (idd == "waving") {
    return (
      <>
        <Screen wavingimage={waving} />
      </>
    );
  } else if (idd == "blowing") {
    return (
      <>
        <Screen wavingimage={blowing} />
      </>
    );
  } else if (idd == "bubble") {
    return (
      <>
        <Screen wavingimage={bubbleImage} />
      </>
    );
  } else if (idd == "bubblevideo") {
    return (
      <>
        <Screen wavingimage={bubbleVideo} />
      </>
    );
  } else {
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

          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            id="nav-responsive"
          >
            <Container>
              <Navbar.Brand></Navbar.Brand>
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

          <div className="subpage ">
            <Container>
              <Row>
                <Col sm={12} lg={6} md={6}>
                  <div className="card-sub">
                    <div className="image-waving-sub">
                      <img src={waving} alt="image" />
                    </div>
                    <button className="btn-waving-sub">
                      <h6>Bubble Ghost Waving</h6>
                    </button>
                  </div>
                </Col>
                <Col sm={12} lg={6} md={6}>
                  <div className="discription">
                    <p>
                      Port history - The original Bubble Ghost was created on an
                      Atari ST computer. The game has been adapted for other
                      computers throughout the world.{" "}
                    </p>
                    <p>
                      {" "}
                      Some years later, ERE Informatique was bought by
                      Infogrames. Infogrames published a new version of Bubble
                      Ghost with updated graphics, Bubble + (Bubble Plus).
                    </p>

                    <p>
                      {" "}
                      A Game Boy version was published in 1990. It was the first
                      French game adapted for the Game Boy.
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
              <div className="back-to-menu">
                Back To Menu{" "}
                <i class="fa fa-angle-right mx-1" aria-hidden="true"></i>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default SubPageProduct;
