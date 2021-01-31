import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {FaFacebook,FaInstagram,FaLinkedin,} from "react-icons/fa";
import { SiAudioboom } from "react-icons/si";
// import { button } from "../button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        {/* <p className="footer-subscription-heading">The Hive Audio</p> */}
        <p className="footer-subscription-text">
          <a href="mailto:angelogvazquez@gmail.com?subject='Hello'"></a>
          Questions? Send us an email.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button buttonStyle="btn--outline">Send</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          {/* <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms of Service</Link>
          </div> */}
          <div className="footer-link-items">
            {/* <h2>Contact Me</h2> */}
            <a href="mailto:angelogvazquez@gmail.com?subject='Hello'">
              Contact
            </a>
            <a href="mailto:angelogvazquez@gmail.com?subject='Hello'">
              Support
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            {/* <h2>Social Media</h2> */}
            {/* <Link to="/">LinkedIn</Link>
            <Link to="/">Facebook</Link> */}
            {/* <Link to="/">Instagram</Link> */}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <SiAudioboom className="navbar-icon" />
              The Hive Audio
            </Link>
          </div>
          <small className="website-rights">Angelo©2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"https://www.linkedin.com/in/angelogvazquez"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="social-icon-link"
              to={"https://www.facebook.com/djangelov/"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to={"https://www.instagram.com/angelo_v_its_me/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;