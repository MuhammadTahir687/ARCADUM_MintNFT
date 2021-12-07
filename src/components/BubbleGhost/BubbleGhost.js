import React from "react";
import "./BubbleGhost.css";
import { Row, Col, Container } from "react-bootstrap";

import bubble from "../../assetsIMG/BubbleGhost.png";
import game from "../../assetsIMG/Scroll Group 2.png";

export const BubbleGhost = () => {
  return (
    <div className="bubble-ghost py-5" style={{ backgroundColor: "#151515" }}>
      <Container className="container">
        <Row>
          <Col sm={12} lg={6} md={6}>
            <div className="subheading-bubble">
              <div className="bubble-image">
                <img src={bubble} alt="image" />
              </div>
              <h2 className="py-4">
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
            </div>
          </Col>
          <Col sm={12} lg={6} md={6}>
            <div className="game-section">
              <div className="image-game">
                <img src={game} alt="game" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
