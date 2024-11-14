import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SliderComponent() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <img src="1.jpg" alt="" />
                </div>

                <div className="slide">
                    <img src="33564_int(1).jpg" alt="" />
                </div>

                <div className="slide">
                    <img src="images (1).jfif" alt="" />
                </div>

                <div className="slide">
                    <img src="images (2).jfif" alt="" />
                </div>

                <div className="slide">
                    <img src="images (3).jfif" alt="" />
                </div>

                <div className="slide">
                    <img src="images.jfif" alt="" />
                </div>
            </Slider>
        </div>
    );
}

