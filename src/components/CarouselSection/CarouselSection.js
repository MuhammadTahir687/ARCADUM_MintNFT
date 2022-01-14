import React, { useEffect, useState } from "react";
import "./CarouselSection.css";
import "../../App.css";
import image1 from "../../assetsIMG/QuestionMark-01.jpg";
import image2 from "../../assetsIMG/BubbleGhost.png";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// const options = {
//   items: 2,
// };

export const CarouselSection = ({ to1, className1, className2 }) => {
  const options = {
    responsive: {
      0: {  
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="carousel-section" style={{ backgroundColor: "#151515" }}>
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          {...options}
          margin={30}
          loop={true}
          nav={true}
          dots={false}
          autoplay={false}
          dots={true}
          items={3}
        >
          <div className="item wow fadeInUp" data-wow-delay=".25s">
            <div className="nft_coll" id="question-1">
              <div className="nft_wrap">
                <img src={image1} className="image-responsive-hide" alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>

            <div className="nft_coll" id="question">
              <div className="nft_wrap">
                <img src={image2} className="image-responsive-show" alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4 style={{ color: "#fff" }}>1987</h4>
              </div>
            </div>
          </div>
          <div className="item wow fadeInUp" data-wow-delay=".75s">
            <div className="nft_coll" id="bubble-1">
              <div className="nft_wrap">
                <img src={image2} className="image-responsive-show" alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4 style={{ color: "#fff" }}>1987</h4>
              </div>
            </div>

            <div className="nft_coll" id="bubble">
              <div className="nft_wrap">
                <img src={image1} className="image-responsive-hide" alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>
          </div>
          <div className="item wow fadeInUp" data-wow-delay="1s">
            <div className="nft_coll">
              <div className="nft_wrap">
                <img src={image1} alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <img src={image1} alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <img src={image1} alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <img src={image1} alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>
          </div>
          {/* <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <img src={image1} alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <img src={image1} alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <img src={image1} alt="" />
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <h4>coming Soon</h4>
              </div>
            </div>
          </div> */}
        </OwlCarousel>
        {/* <div className="buy-drop-btn"> */}
        <div className={className2}>
          {/* <button className="drop-btn">Buy Drop #1</button> */}
          {/* <Link to="explore" className="drop-btn"> */}
          <Link to={to1} className={className1}>
            Buy Drop #1
          </Link>
        </div>
      </div>
    </div>
  );
};
