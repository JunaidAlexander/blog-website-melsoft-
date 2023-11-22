import React from "react";
import ".About.css";

// About component
const About = () => {
  return (
    <section className="about-section container">
      <div className="about-content">
        {/* Video on the left */}
        <div className="video-container">
          <iframe
            title="BATSWANA"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bl1dOTQOJnw"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to Ngwao, your digital window into Tswana culture! Dive into
            the traditions, language, and vibrant arts of the Batswana people.
            Ngwao celebrates the resilience of Tswana identity in the modern
            world. Join us on a journey into the heart of Southern Africa,
            exploring the beauty of Setswana and the rich tapestry of Tswana
            heritage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
