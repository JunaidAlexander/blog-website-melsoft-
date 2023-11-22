import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./BlogTimeline.css";

const BlogPost = ({
  avatarSrc,
  dateNumber,
  dateMonth,
  title,
  content,
  tags,
}) => (
  <div className="blog-post">
    <div className="blog-info">
      <img src={avatarSrc} className="img-fluid" alt="" />
      <div className="date">
        <div className="number">{dateNumber}</div>
        <div>{dateMonth}</div>
      </div>
    </div>
    <h3>
      <a href="#blogitem.html">{title}</a>
    </h3>
    <p>
      <img
        className="img-fluid pull-right"
        src="images/SA-dresses.png"
        alt=""
      />
      {content}
    </p>
    <ul className="blog-tags list-unstyled list-inline">
      {tags.map((tag, index) => (
        <li key={index}>
          <a href="#">
            <i className="fa fa-tag"></i>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const BlogTimeline = () => {
  const blogPosts = [
    {
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      day: "18",
      month: "Dec",
      title: "Trendy Shweshwe Dresses",
      content:
        "As the wedding season approaches, the allure of SeTswana Shweshwe dresses takes center stage, captivating brides and wedding attendees alike with their vibrant elegance. Trending Shweshwe dresses for this celebratory season showcase a harmonious blend of traditional craftsmanship and contemporary design.As brides and wedding guests seek to honor tradition while making a fashionable statement, these trending Shweshwe dresses effortlessly capture the essence of the joyous union, symbolizing the fusion of heritage and contemporary style in the celebration of love.",
      blogImage: "images/SA-dresses.png",
      tags: ["book", "music", "nature", "read", "songs", "sunshine"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      day: "09",
      month: "Dec",
      title: "Botswana's most Loved Meat",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis lacus ac semper viverra. Etiam consequat odio sollicitudin metus condimentum, quis hendrerit erat adipiscing...",
      blogImage: "images/seswaa.jpg",
      tags: ["book", "music", "nature", "read", "songs", "sunshine"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
      day: "25",
      month: "Nov",
      title: "Traditional Food Preparation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis lacus ac semper viverra. Etiam consequat odio sollicitudin metus condimentum, quis hendrerit erat adipiscing...",
      blogImage: "images/3foot.jpg",
      tags: ["book", "music", "nature", "read", "songs", "sunshine"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
      day: "19",
      month: "Nov",
      title: "Cultural Dance Atire",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis lacus ac semper viverra. Etiam consequat odio sollicitudin metus condimentum, quis hendrerit erat adipiscing...",
      blogImage: "images/dance-culture.jpg.",
      tags: ["book", "music", "nature", "read", "songs", "sunshine"],
      link: "#blogitem.html",
    },
  ];

  return (
    <section className="content-item grey" id="blog-timeline">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h2>NGWAO</h2>
            <div className="timeline">
              {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="sidebar">
              <h3>Categories</h3>
              <div className="box categories">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <i className="fa fa-female"></i>Fashion
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-music"></i>Food
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-hashtag"></i>Uncategorized
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Recent Posts</h3>
              <div className="box posts">
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Traditional Medicine</a>
                    <div>02/11/2023</div>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Royal Bafokeng Cheiftency</a>
                    <div>10/11/2023</div>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Traditional Wedding Dresse</a>
                    <div>12/11/2023</div>
                  </li>
                </ul>
              </div>
              <h3>Tags</h3>
              <div className="box tags">
                <ul className="blog-tags list-unstyled list-inline">
                  <li>
                    <a href="#">
                      <i className="fa fa-tag"></i>book
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tag"></i>music
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-tag"></i>read
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tag"></i>songs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTimeline;
