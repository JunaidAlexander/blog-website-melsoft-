import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import your global stylesheet

const Footer = () => {
  return (
    <div>
      <div className="footer-clean">
        <footer>
          <div className="containerTwo">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Navigate</h3>
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
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>NGWAO</h3>
                <img src="images/nkgo.png" style={{ width: "100px" }} alt="" />
              </div>
              <div className="col-lg-3 item subscription">
                <h3>Subscribe</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <button type="submit" className="btn btn-custom-color">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="col-lg-3 item social">
                <a href="#">
                  <i className="icon ion-social-facebook"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-instagram"></i>
                </a>
                <p className="copyright" style={{ textAlign: "center" }}>
                  gwao © 2023
                </p>
              </div>
            </div>
          </div>
        </footer>
        <p className="copyright">coded by Palesa and Junaid</p>
      </div>
    </div>
  );
};

export default Footer;
