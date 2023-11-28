import React from "react";
import Navbar from "../Components/Navbar";
import BlogSubmissionForm from "../Components/BlogSubmissionForm";
import Footer from "../Components/Footer";

function PostLayout() {
  return (
    <div className="App">
      <Navbar />
      <BlogSubmissionForm />
      <Footer />
    </div>
  );
}

export default PostLayout;
