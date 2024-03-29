import "./Footer.css";
import Logo from "/assets/images/logo-no-bg.png";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: "0px",
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <div className="container">
        <div className="upper-footer">
          <div className="upper-footer-col1">
            <div className="logo-tagline">
              <img src={Logo} alt="" className="footer-logo" />
              <p>Music For All</p>
            </div>
            <div className="about">
              <h5>About Us</h5>
              <p>
                We want to bring out the musician in everyone. Music for All.
              </p>
            </div>
            <div className="contact">
              <h5>Contact</h5>
              <div>
                <MdAddCall />
                <p>+91 8750209070</p>
              </div>
              <div>
                <MdEmail />
                <p>rhythmicstan@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="upper-footer-col2">
              <h4>INFORMATION </h4>
              <ul>
                <li>
                  <Link to="/privacy" onClick={scrollTo}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" onClick={scrollTo}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={scrollTo}>
                    Supports
                  </Link>
                </li>
              </ul>
            </div>
            <div className="upper-footer-col3">
              <h4>HELPFUL LINKS</h4>
              <ul>
                <li>
                  <Link to="/about" onClick={scrollTo}>
                    About Us
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link to="/about" onClick={scrollTo}>
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={scrollTo}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="lower-footer">
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/rhythmicstan/?hl=en"
              target="_blank"
            >
              <FaInstagram className="footer-socials-icon" />
            </a>
            <a href="https://www.facebook.com/Rhythmicstan/" target="_blank">
              <FaFacebookF className="footer-socials-icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNvFsYasUwR_Wd-Wy3ZclLw"
              target="_blank"
            >
              <FaYoutube className="footer-socials-icon" />
            </a>
          </div>
          <p>COPYRIGHT © 2024 Rhythmicstan Music Academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
