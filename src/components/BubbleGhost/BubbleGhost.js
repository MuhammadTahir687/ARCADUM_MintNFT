import React from "react";
import "./BubbleGhost.css";
import "../../App.css";
import { Row, Col, Container } from "react-bootstrap";

import bubble from "../../assetsIMG/BubbleGhost.png";
import game from "../../assetsIMG/Scroll Group 2.png";
import video from "../../video/VideoGame.mp4";

export const BubbleGhost = () => {
  const handleClick = () => {
    var vid = document.getElementById("myVideo");
    vid.play();
  };

  return (
    <div className="bubble-ghost py-5">
      <Container className="container">
        <Row>
          <Col sm={12} lg={6} md={6}>
            <div className="subheading-bubble">
              <div className="bubble-image">
                <img src={bubble} alt="image" />
              </div>
              <h2 className="py-2">
                <span>Bubble Ghost</span>(1987)
              </h2>
              <p>
                In Bubble Ghost you must help a mischievous littele spook blow a
                delicate bubble through a castle filed with diabolical devic and
                demons.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6} md={6}>
            <div className="game-section">
              {/* <div className="scroll-img-1"> */}

              {/* </div> */}
              <div className="image-game">
                <img src={game} alt="game" className="game-img" />
                <video autoPlay loop id="myVideo">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
