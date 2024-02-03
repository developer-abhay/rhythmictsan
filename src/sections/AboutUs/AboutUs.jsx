import AboutImage1 from "/assets/images/banner.jpg";
import AboutImage2 from "/assets/images/heroCover.avif";

import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

import "./AboutUs.css";

const AboutUs = () => (
  <section id="about-us">
    <h5>Get to Know</h5>
    <h2>About Us</h2>
    <div className="container about-us-container">
      <div className="about-us-image">
        <img src={AboutImage1} alt="About-img" />
      </div>

      <div className="about-content">
        <div className="about-cards">
          <article className="about-card card-hover">
            <FaChalkboardTeacher className="about-icon" />
            <h5>10000+</h5>
            <small>Teaching Experience</small>
          </article>
          <article className="about-card card-hover">
            <PiStudentFill className="about-icon" />
            <h5>1200+</h5>
            <small>Happy Students</small>
          </article>
          <article className="about-card card-hover">
            <BsCalendarEventFill className="about-icon" />
            <h5>60+</h5>
            <small>Events Organized</small>
          </article>
          <article className="about-card card-hover">
            <FaTrophy className="about-icon" />
            <h5>35+</h5>
            <small>Awards Won</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nam
          culpa, incidunt eaque ea recusandae odit veniam dolorem! Officiis
          temporibus, molestias, incidunt ea modi facilis natus explicabo
          provident facere vel rem culpa! Voluptatum magni necessitatibus
          quaerat doloribus, blanditiis nobis pariatur accusamus, eveniet
          explicabo culpa modi nostrum laboriosam inventore possimus? Beatae.
        </p>

        <a className="btn btn-primary"> Learn More</a>
      </div>
    </div>
  </section>
);

export default AboutUs;
