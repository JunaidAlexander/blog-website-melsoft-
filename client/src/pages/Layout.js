import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default Layout;
