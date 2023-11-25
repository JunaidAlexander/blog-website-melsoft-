// Blog.js
import React from "react";
import "./Blog.css"; // Import your CSS file for styling

const Blog = () => {
  const CreatedBlogPosts = [
    // ... (same as your existing blog posts)
  ];

  const blogPosts = CreatedBlogPostsBlogPosts;

  return (
    <section className="content-item grey" id="blog-timeline">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h2>Blog Timeline</h2>
            <div className="timeline">
              {blogPosts.map((post, index) => (
                <div className="blog-post" key={index}>
                  <h3>
                    <a href={`#${post.username}`}>{post.title}</a>
                  </h3>
                  <p>{post.content}</p>
                  <p className="post-author">Author: {post.author}</p>
                  <p className="post-username">Username: {post.username}</p>
                  <p className="post-date">Date: {post.date}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-4">
            {/* Sidebar or other components can be added here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
