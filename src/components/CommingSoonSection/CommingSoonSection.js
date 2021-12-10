import React, { useState, useEffect } from "react";
import "./CommingSoonSection.css";

import { Section } from "../../Section";

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import header from "../../assetsIMG/Header.png";
import { Link } from "react-router-dom";
import arrow from "../../assetsIMG/Arrow.png";

// import { CommunitySection } from "../CommunitySection/CommunitySection";

export const CommingSoonSection = () => {
  // const [show, setShow] = useState(false);
  const [visibl, setVisibl] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setVisibl(true);
    setScroll(!scroll);
  };

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
              {/* <div className="close" onClick={() => setShow(false)}>
                <button className="btn-close">X</button>
              </div> */}
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="scrol-screen-subheading">
          <div className="header-image wow zoomIn" data-wow-delay=".50s">
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
            <p>
              Each artwork is origina
              <br /> l with own color palette
            </p>
            <button className="scrol-btn">Lorem ipsum</button>
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
