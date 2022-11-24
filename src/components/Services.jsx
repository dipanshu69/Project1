import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";


const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="image1" />
          <h1 className="legend">Full Stack Software Development</h1>
        </div>
        <div>
          <img src={img2} alt="image2" />
          <div>
            <h1 className="legend">
              We Essenet Technologies are engaged in Software development
              activities. Our Range of Activities are as given below{" "}
            </h1>
          </div>
        </div>
      </Carousel>
      <div className="info">
        <ul>
          <li>Software Development</li>
          <li>Web Development</li>
          <li>Digital Marketing</li>
          <li>Search Engine Optimization</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
