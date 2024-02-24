import "./Footer.css";
import Logo from "/assets/images/logo-no-bg.png";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
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
                  <a href="www.rhythmicstan.com" target="_blank">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="www.rhythmicstan.com" target="_blank">
                    More Search
                  </a>
                </li>
                <li>
                  <a href="www.rhythmicstan.com" target="_blank">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="www.rhythmicstan.com" target="_blank">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="www.rhythmicstan.com" target="_blank">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="upper-footer-col3">
              <h4>HELPFUL LINKS</h4>
              <ul>
                <li>
                  <a href="www.rhythmicstan.com" target="_blank">
                    Services
                  </a>
                </li>
                <li>
                  <a href="www.rhythmicstan.com" target="_blank">
                    Supports
                  </a>
                </li>
                <li>
                  <a href="www.rhythmicstan.com" target="_blank">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="www.rhythmicstan.com" target="_blank">
                    Privacy Policy
                  </a>
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
