import React from "react";
import "./BlogTimeline.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogTimeline = ({
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
            {/* <i className="fa fa-tag"></i> */}
            {tag}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const BlogPost = () => {
  const blogPosts = [
    {
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      day: "18",
      month: "Dec",
      title: "Most Loved Meat-Seswaa",
      content:
        "Seswaa, known as such in the northern region of Botswana, or loswao, as referred to in the southern part of the country and western South Africa, represents a traditional meat dish deeply rooted in Botswana's culinary heritage. Typically crafted from beef or goat meat, seswaa is created using leftover or tough cuts, such as legs, neck, and back...",
      blogImage: "/images/seswaa.png",
      tags: ["book", "nature", "read", "songs"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      day: "09",
      month: "Dec",
      title: "Badimo: Riching The Other Side",
      content:
        "Badimo is a term used in the Tswana culture of Botswana and South Africa. It refers to the ancestors or spirits of deceased family members. The concept of badimo is deeply rooted in the belief that these ancestral spirits continue to play a role in the lives of the living. People often seek guidance and protection from their badimo and may make offerings or perform rituals to honor and communicate with them. The reverence for badimo is an integral part of Tswana spirituality and cultural practices...",
      blogImage: "/images/anc.jpg",
      tags: ["book", "nature", "read", "songs"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
      day: "25",
      month: "Nov",
      title: "Ceremonial Food Preparation",
      content:
        "Outdoor cooking in Tswana culture, particularly using the three-foot pot, is a rich and meaningful tradition. It not only produces delicious meals but also fosters a sense of community, preserves cultural practices, and pays homage to the importance of shared meals in Tswana society...",
      blogImage: "/images/3foot.jpg",
      tags: ["book", "nature", "read", "songs"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
      day: "19",
      month: "Nov",
      title: "Shweshwe Dresses",
      content:
        "Tswana shweshwe dresses are a beautiful embodiment of cultural pride and creativity. They seamlessly blend the traditional elements of Tswana clothing with the distinctive and colorful patterns of shweshwe fabric, creating a unique and cherished style within Southern African fashion...",
      blogImage: "/images/SA-dresses.jpg.",
      tags: ["book", "nature", "read", "songs"],
      link: "#blogitem.html",
    },
  ];

  return (
    <section className="content-item grey" id="blog-timeline">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h2 style={{ color: "#E96656" }}>NGWAO</h2>
            <div className="timeline">
              {blogPosts.map((post, index) => (
                <BlogTimeline key={index} {...post} />
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
                      {/* <i className="fa fa-female"></i>Fashion */}
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      {/* <i className="fa fa-music"></i>Food */}
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      {/* <i className="fa fa-hashtag"></i>Uncategorized */}
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Recent Posts</h3>
              <div className="box posts">
                <ul className="list-unstyled">
                  <li>
                    {/* <i className="fa fa-chevron-right"></i> */}
                    <a href="#">Traditional Medicine</a>
                    <div>02/11/2023</div>
                  </li>
                  <li>
                    {/* <i className="fa fa-chevron-right"></i> */}
                    <a href="#">Royal Bafokeng Chieftaincy</a>
                    <div>10/11/2023</div>
                  </li>
                  <li>
                    {/* <i className="fa fa-chevron-right"></i> */}
                    <a href="#">Cultural Dance</a>
                    <div>12/11/2023</div>
                  </li>
                </ul>
              </div>
              <h3>Tags</h3>
              <div className="box tags">
                <ul className="blog-tags list-unstyled list-inline">
                  <li>
                    <a href="#">
                      {/* <i className="fa fa-tag"></i>book */}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <i className="fa fa-tag"></i>music */}
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-tag"></i>read
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <i className="fa fa-tag"></i>songs */}
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
