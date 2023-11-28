// Import React and any other necessary modules
import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"; // Import the corresponding CSS file

// Create the HeroComponent functional component
const HeroComponent = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop playsInline className="video">
        <source src="images/dance.mp4" type="video/mp4" />
      </video>
      <nav>
        <img src="images/nkgo.png" alt="logo" className="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Explore Tswana Culture Bliss!</h1>
        <p>
          Immerse yourself in the vibrant tapestry of Africa's rich culture with
          a journey into the heart of the Tswana tribe!
        </p>
        <Link to="/">Read More</Link>
      </div>
    </div>
  );
};

// Export the component for use in other files
export default HeroComponent;
