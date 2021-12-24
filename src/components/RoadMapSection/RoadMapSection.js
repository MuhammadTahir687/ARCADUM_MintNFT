import React, { useEffect, useState } from "react";
import "./RoadMapSection.css";
import "../../App.css";
import { Row, Col } from "react-bootstrap";

import roadimg1 from "../../assetsIMG/Roadmap/E.png";
import roadimg2 from "../../assetsIMG/Roadmap/E1 copy.png";
import roadimg3 from "../../assetsIMG/Roadmap/E2.png";
import roadimg4 from "../../assetsIMG/Roadmap/E3.png";
import roadimg5 from "../../assetsIMG/Roadmap/E4.png";

import img2 from "../../assetsIMG/Roadmap/Rectangle 24.png";
import img from "../../assetsIMG/Roadmap/Rectangle 26.png";

export const RoadMapSection = () => {
  const handleClick = () => {
    document.getElementById("roadimg-2").scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOnClick = () => {
    document.getElementById("roadimg-5").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="section-roadmap">
        <div className="container">
          <Row>
            <Col sm={12} lg={8} md={8}>
              <div className="roadmap-heading">
                <h1>Roadmap</h1>
                <p>
                  Nostalgia beckons, urging you to cast away all your worries
                  and take a plunge. Take our journey as we bring you enduring
                  classics that will transport you back to the-days of the
                  simpler times.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}></Col>
          </Row>

          <Row className="box-roadmap-2">
            <Col sm={12} lg={8} md={8}>
              <div className="roadmap-heading-1">
                <h1 className="head-img">
                  <div className="border-roadmap"></div>
                  <div className="rectangle-img">
                    <img src={img2} />
                  </div>
                  <span className="span-roadmap">.01</span>-Launch Roadmap
                </h1>

                <p>
                  Arcadum partners with your favorite retro and classic video
                  games. For the first time minted on ethereum’s mainnet, Own
                  actual sprites from the games you know and love. So what are
                  sprites ? if you grew up playing 8-bit and 16-bit games you
                  might be familiar with their unique visual style A
                  two-dimensional bitmap that is integrated into a larger scene,
                  most often in a 2D video game.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className="roadmap-image">
                <img src={roadimg1} alt="img" onClick={() => handleClick()} />
              </div>
            </Col>
          </Row>

          <Row className="box-roadmap-3">
            <Col sm={12} lg={8} md={8}>
              <div className="roadmap-heading-1">
                <h1 className="head-img">
                  <div className="rectangle-img">
                    <img src={img} />
                  </div>
                  <span className="span-roadmap">.02</span>-be the key
                </h1>
                <p>
                  Because NFTs are not fungible, they can be used to represent
                  other, unique assets .For instance your unique NFT will be
                  able to unlock and play your unique game.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className="roadmap-image" id="roadimg-2">
                <img src={roadimg2} alt="img" onClick={() => handleOnClick()} />
              </div>
            </Col>
          </Row>

          <Row className="box-roadmap-3">
            <Col sm={12} lg={8} md={8}>
              <div className="roadmap-heading-1">
                <h1 className="head-img">
                  <div className="rectangle-img">
                    <img src={img} />
                  </div>
                  <span className="span-roadmap">.03</span>COMMUNITY LOVE
                </h1>
                <p>
                  Build profiles share, play and captivate your audience. Grow a
                  bigger fan club with your own unique social profile pages.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className="roadmap-image-art">
                <img src={roadimg3} alt="img" />
              </div>
            </Col>
          </Row>

          <Row className="box-roadmap-3">
            <Col sm={12} lg={8} md={8}>
              <div className="roadmap-heading-1">
                <h1 className="head-img">
                  <div className="rectangle-img">
                    <img src={img} />
                  </div>
                  <span className="span-roadmap">.04</span>-WHATS YOUR SCORE
                </h1>
                <p>
                  Create a custom Arcadum scoreboard to monitor your gaming
                  companions. Track points for competitions. Share the live
                  results. Step up your game and rack up point to rank high on
                  the mother board.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className="roadmap-image-4">
                <img src={roadimg4} alt="img" />
              </div>
            </Col>
          </Row>
          <div className="box-roadmap-5">
            <Row className="box-roadmap-3">
              <Col sm={12} lg={8} md={8}>
                <div className="roadmap-heading-5 roadmap-heading-1">
                  <h1 className="head-img">
                    <div className="rectangle-img">
                      <img src={img} />
                    </div>
                    <span className="span-roadmap">.05</span>-Metaverse MASHUP
                  </h1>
                  <p>
                    We are excited to work with a group of partners and people
                    who lead the race and outlined what to expect from the
                    future of VR and augmented reality . Arcadum is Mixing old
                    and new to create a unique world. marrying retro with the
                    future can produce a world that looks as though it has
                    evolved over many years. Blending future tech with inherited
                    pieces and items that have sentimental importance is what
                    makes arcadum unique. There’s something special about a
                    world that stimulates your nostalgic senses.
                  </p>
                </div>
              </Col>
              <Col sm={12} lg={4} md={4}>
                <div className="roadmap-image-5" id="roadimg-5">
                  <img src={roadimg5} alt="img" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
