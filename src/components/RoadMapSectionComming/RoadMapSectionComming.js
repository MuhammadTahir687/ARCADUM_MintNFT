import React, { useEffect, useState } from "react";
import "./RoadMapSectionComming.css";
import "../../App.css";
import { Row, Col } from "react-bootstrap";

import roadimg1 from "../../assetsIMG/Roadmap/E.png";
import roadimg2 from "../../assetsIMG/Roadmap/E1 copy.png";
import roadimg3 from "../../assetsIMG/Roadmap/E2.png";
import roadimg4 from "../../assetsIMG/Roadmap/E3.png";
import roadimg5 from "../../assetsIMG/Roadmap/E4.png";

import img2 from "../../assetsIMG/Roadmap/Rectangle 24.png";
import img from "../../assetsIMG/Roadmap/Rectangle 26.png";

export const RoadMapSectionComming = () => {
  const handleClick = () => {
    document.getElementById("roadimg-2").scrollIntoView({
      behavior: "smooth",
    });
  };

  // const handleOnClick = () => {
  //   document.getElementById("roadimg-5").scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div>
      <div className="section-roadmap">
        <div className="container">
          <Row>
            <Col sm={12} lg={8} md={8}>
              <div className="roadmap-heading">
                <h1>Roadmap</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  <span className="span-roadmap">.01</span> Launch Roadmap
                </h1>

                <p>
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  consectetur adipiscing elit, sed consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.aliqua do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.aliqua do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
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
                  <span className="span-roadmap">.02</span> Physical Part
                </h1>
                <p>
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  consectetur adipiscing elit, sed consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.aliqua do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.aliqua do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className="roadmap-image-2" id="roadimg-2">
                <img src={roadimg2} alt="img" />
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
                  <span className="span-roadmap">.03</span> Ar-Cadum x Artists
                </h1>
                <p>
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  consectetur adipiscing elit, sed consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.aliqua do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.aliqua do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
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
                  <span className="span-roadmap">.04</span> Ar-Cadum Multiverse
                </h1>
                <p>
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  consectetur adipiscing elit, sed consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.aliqua do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.aliqua do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={4} md={4}>
              <div className="roadmap-image">
                <img src={roadimg4} alt="img" />
              </div>
            </Col>
          </Row>
          <div className="box-roadmap-5">
            <Row className="box-roadmap-3">
              <Col sm={12} lg={8} md={8}>
                <div className="roadmap-heading">
                  <h1 className="head-img">
                    <div className="rectangle-img">
                      <img src={img} />
                    </div>
                    <span className="span-roadmap">.05</span> Future of Ar-Cadum
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua consectetur adipiscing elit, sed consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.aliqua do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.aliqua do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
