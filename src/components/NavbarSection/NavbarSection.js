import React, { useEffect, useState } from "react";

import { Sections } from "../../Sections";

import "./NavbarSection.css";
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
import left from "../../assetsIMG/LeftSide.png";
import right from "../../assetsIMG/RightSide.png";
import { CommingSoonSection } from "../CommingSoonSection/CommingSoonSection";
// import { TimerSection } from "../TimerSection/TimerSection";

import WOW from "wowjs";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

export const NavbarSection = () => {
  const [show, setShow] = useState(false);
  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);
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

  return (
    <>
      <Modal fullscreen={true} show={show} onHide={() => setShow(false)}>
        <div className="close" onClick={() => setShow(false)}>
          <button className="btn-close">X</button>
        </div>

        <Modal.Body>
          <CommingSoonSection />
        </Modal.Body>
      </Modal>

      <div className="navbar-section" id="nav">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            {/* <Navbar.Brand */}
            <div
              // href=""
              className="wow fadeInLeftBig"
              data-wow-delay=".50s logo-img"
            >
              <img src={logo} alt="image" />
              {/* </Navbar.Brand> */}
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <div
                  onClick={() => setShow(true)}
                  id="comming-soon"
                  className="wow fadeIn nav-link"
                  data-wow-delay=".50s"
                >
                  Comming Soon
                </div>
                {/* </Link> */}
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
            {/* <img src={left} alt="header" /> */}
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
            {/* <img src={right} alt="header" /> */}

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
          </div>
          <div
            className="artboard-image wow fadeInDownBig "
            data-wow-delay=".50s"
          >
            <img src={artboard} alt="image" />
          </div>

          <div className="button-text ">
            <h4
              className="wow fadeInRightBig "
              data-wow-delay=".50s"
              onClick={() => handleClick()}
            >
              Press start
              <br /> to play
            </h4>
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
