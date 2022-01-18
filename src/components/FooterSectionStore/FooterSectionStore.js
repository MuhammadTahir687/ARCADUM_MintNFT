import React, { useEffect, useState } from "react";
import "./FooterSectionStore.css";
import "../../App.css";
import "../NavbarSection/NavbarSection.css";
import logo from "../../assetsIMG/logo.png";
import { Row, Col } from "react-bootstrap";

import opensea from "../../assetsIMG/opensea w.png";
import opensea2 from "../../assetsIMG/opensea.png";
import discord2 from "../../assetsIMG/discord2.png";
import discord from "../../assetsIMG/discord.png";

export const FooterSectionStore = () => {
  const [states, setStates] = useState(opensea);
  const [cord, setCord] = useState(discord);

  const handleMouseOver = () => {
    setStates(opensea2);
  };

  const handleMouseOut = () => {
    setStates(opensea);
  };

  const disMouseOver = () => {
    setCord(discord2);
  };

  const disMouseOut = () => {
    setCord(discord);
  };

  const handleScroll = () => {
    document.getElementById("nav").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="container">
        <div className="footer-subheading">
          <Row>
            <Col sm={12} lg={9} md={9} className="footer-subhead">
              <div className="footer-image">
                <a href="/">
                  <img src={logo} alt="image" />
                </a>
              </div>

              <p className="mt-2 mb-5">
                Game ownership forever minted on the blockchain
              </p>
              <h6>&#169;2022 Ar-Cadum. All Right Reserved</h6>
            </Col>
            <Col sm={12} lg={3} md={3} className="footer-right-subheading">
              <a href="">
                <h2>Home</h2>
              </a>
              <p>Terms & Conditions</p>
              <p> Smart Contract</p>
              <ul className="button-header px-0">
                <li>
                  <a href="https://twitter.com/arcadumverse" target="_blank">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onMouseOver={() => handleMouseOver()}
                    onMouseOut={() => handleMouseOut()}
                  >
                    <img className="opensea-footer" src={states} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/channels/914886027536138270/915243460745912390"
                    target="_blank"
                    onMouseOver={() => disMouseOver()}
                    onMouseOut={() => disMouseOut()}
                  >
                    <img className="discord-footer" src={cord} />
                  </a>
                </li>
              </ul>
              <h6 className="copy-right">
                &#169;2021 Ar-Cadum. All Right Reserved
              </h6>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
