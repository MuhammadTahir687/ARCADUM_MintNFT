import React from "react";
import "./FooterSection.css";
import logo from "../../assetsIMG/logo.png";

export const FooterSection = () => {
  return (
    <div>
      <Row>
        <Col sm={12} lg={6} md={6} className="footer-left">
          <img src={logo} alt="image" />
          <p className="mt-2 mb-5">Lorem ipsun dolor site amit, consectetur</p>
          <h6>All Right Reserved</h6>
        </Col>
        <Col sm={12} lg={6} md={6} className="footer-right">
          <a href="/">
            <h2>Home</h2>
          </a>
          <p>Terms & Conditions</p>
          <h4> Smart Contract</h4>
        </Col>
      </Row>
    </div>
  );
};
