import "./Footer.css";
import Logo from "../../../public/assets/images/logo-no-bg.png";
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
                We want to bring out the musician in everyone. Lorem ipsum hello
                there
              </p>
            </div>
            <div className="contact">
              <h5>Contact</h5>
              <div>
                <MdAddCall />
                <p>6191961515</p>
              </div>
              <div>
                <MdEmail />
                <p>RaviKumar@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h4>INFORMATION </h4>
            <ul>
              <li>About Us</li>
              <li>More Search</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <h4>HELPFUL LINKS</h4>
            <ul>
              <li>Services</li>
              <li>Supports</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* <div className="upper-footer-col4">
            <h5>Enter your email</h5>
            <input type="text" placeholder="Enter Your Email" />
            <a className="btn btn-primary">Submit</a>
          </div> */}
        </div>
        <hr />
        <div className="lower-footer">
          <div className="footer-socials">
            <FaInstagram className="footer-socials-icon" />
            <FaFacebookF className="footer-socials-icon" />
            <FaYoutube className="footer-socials-icon" />
          </div>
          <p>COPYRIGHT © 2024 Rhythmicstan Music Academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
