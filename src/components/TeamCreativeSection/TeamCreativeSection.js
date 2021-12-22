import React from "react";
import "./TeamCreativeSection.css";
import "../../App.css";
import team from "../../assetsIMG/Roadmap/E_1.png";

import { Row, Col } from "react-bootstrap";

export const TeamCreativeSection = () => {
  return (
    <div>
      <div
        className="team-section"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container">
          <Row>
            <Col sm={12} lg={6} md={6}>
              <div className="img-team">
                <img src={team} alt="team" />
              </div>
            </Col>
            <Col sm={12} lg={6} md={6}>
              <div className="heading">
                <h3>
                  <span>Who are we?</span>
                </h3>
                <h1 className="creative"> Creative Teams </h1>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
