import React from "react";
import "./FooterSectionComming.css";
import "../NavbarSection/NavbarSection.css";
import logo from "../../assetsIMG/logo.png";
import { Row, Col } from "react-bootstrap";

export const FooterSectionComming = () => {
  const handleScroll = () => {
    document.getElementById("soon").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="container">
        <div className="footer-subheading">
          <Row>
            <Col sm={12} lg={9} md={9} className="footer-subhead-1">
              <div className="footer-image-1">
                <img src={logo} alt="image" onClick={() => handleScroll()} />
              </div>

              <p className="mt-2 mb-5">
                Lorem ipsun dolor site amit, consectetur
              </p>
              <h6>&#169;2021 Ar-Cadum. All Right Reserved</h6>
            </Col>
            <Col sm={12} lg={3} md={3} className="footer-right-subheading">
              <a href="">
                <h2>Home</h2>
              </a>
              <p>Terms & Conditions</p>
              <p> Smart Contract</p>
              <ul className="button-header px-0">
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
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};