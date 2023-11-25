// home.js
import React from "react";
import BlogList from "../BlogList";
import Navbar from "../Navbar";
import HeroSection from "./HeroSection";
import Footer from "../Footer";
import About from "../About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Home;
