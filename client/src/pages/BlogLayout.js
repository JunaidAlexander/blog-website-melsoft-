import React from "react";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import BlogTimeline from "../Components/BlogTimeline";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <BlogTimeline />
      <Footer />
    </div>
  );
}

export default Home;
