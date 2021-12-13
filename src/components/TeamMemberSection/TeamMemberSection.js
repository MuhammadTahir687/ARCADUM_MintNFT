import React from "react";
import "./TeamMemberSection.css";
import "../NavbarSection/NavbarSection.css";
import { Row, Col } from "react-bootstrap";

import heart from "../../assetsIMG/Icon/Heart_Icon.svg";
import coin from "../../assetsIMG/Icon/Coin_Icon.svg";
import chest from "../../assetsIMG/Icon/Chest_Icon.svg";
import piza from "../../assetsIMG/Icon/Pizza_Icon.svg";
import sword from "../../assetsIMG/Icon/Sword_Icon.svg";

export const TeamMemberSection = () => {
  return (
    <div>
      <div className="team-member py-5" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <Row>
            <Col sm={12} lg={4} md={4}>
              <div className="member-section-subheading">
                <div className="overlay">
                  <div className="member-image">
                    <img src={heart} alt="img" />
                  </div>
                </div>
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum doler site amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor <br /> incididunt
                </p>
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
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className="member-section-subheading">
                <div className="member-image">
                  <img src={coin} alt="img" />
                </div>
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum doler site amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor <br /> incididunt
                </p>
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
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className="member-section-subheading">
                <div className="member-image">
                  <img src={chest} alt="img" />
                </div>
                <h1>Lorem ipsum</h1>
                <p>
                  Lorem ipsum doler site amet, consectetur <br />
                  adipiscing elit, sed do eiusmod tempor <br /> incididunt
                </p>
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
              </div>
            </Col>
          </Row>
          <div className="sword">
            <div className="member-section-subheading sword-flex">
              <div className="member-image">
                <img src={piza} alt="img" />
              </div>
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum doler site amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br /> incididunt
              </p>
              <ul className="button-header team-section">
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
            </div>

            <div className="member-section-subheading sword-flex">
              <div className="member-image">
                <img src={sword} alt="img" />
              </div>
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum doler site amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor <br /> incididunt
              </p>
              <ul className="button-header team-section">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
