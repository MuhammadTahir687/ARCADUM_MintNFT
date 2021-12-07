import React from "react";
import "./CarouselSection.css";
import image1 from "../../assetsIMG/QuestionMark-01.jpg";
import image2 from "../../assetsIMG/BubbleGhost.png";

import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  items: 2,
};

export const CarouselSection = () => {
  return (
    <div className="carousel-section" style={{ backgroundColor: "#151515" }}>
      <div className="container">
        <OwlCarousel className="owl-theme" loop margin={30} nav>
          <div className="item wow fadeInUp" data-wow-delay=".25s">
            <div className="nft_coll">
              <div className="nft_wrap">
                <a href="">
                  <img src={image1} className="" alt="" />
                </a>
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <a href="">
                  <h4>Comming Soon</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="item wow fadeInUp" data-wow-delay=".75s">
            <div className="nft_coll">
              <div className="nft_wrap">
                <a href="">
                  <img src={image1} alt="" />
                </a>
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <a href="">
                  <h4>Comming Soon</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="item wow fadeInUp" data-wow-delay="1s">
            <div className="nft_coll">
              <div className="nft_wrap">
                <a href="">
                  <img src={image1} alt="" />
                </a>
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <a href="">
                  <h4>Comming Soon</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <a href="">
                  <img src={image1} alt="" />
                </a>
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <a href="">
                  <h4>Comming Soon</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <a href="">
                  <img src={image2} alt="" />
                </a>
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <a href="">
                  <h4>1987</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="nft_coll">
              <div className="nft_wrap">
                <a href="">
                  <img src={image1} alt="" />
                </a>
              </div>
              <div className="nft_coll_info" style={{ paddingTop: "20px" }}>
                <a href="">
                  <h4>Comming Soon</h4>
                </a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
