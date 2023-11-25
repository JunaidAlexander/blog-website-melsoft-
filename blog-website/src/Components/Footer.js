// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="containerTwo">
        <div className="row justify-content-center">
          <div className="col-sm-4 col-md-3 item">
            <h3>Navigate</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Post</a>
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
              <button type="submit" className="btn btn-primary">
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
            <p className="copyright">Company Name © 2018</p>
          </div>
        </div>
      </div>
      <p className="copyright" style={{ textAlign: "center" }}>
        coded by Palesa and Tshegofatso
      </p>
    </footer>
  );
};

export default Footer;
