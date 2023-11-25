import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="intro">
      <div className="hero">
        <video
          className="video"
          src="images/dance.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="overlay"></div>
      <div className="info">
        <h1>Explore Tswana Culture Bliss!</h1>
        <p>
          Immerse yourself in the vibrant tapestry of Africa's rich culture with
          a journey into the heart of the Tswana tribe!
        </p>
        <a href="#">
          <button>Read More</button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
