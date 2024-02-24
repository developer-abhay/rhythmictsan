import AboutImage from "/assets/images/about.jpg";

import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about-us">
      <h5>Get to Know</h5>
      <h2>About Us</h2>
      <div className="container about-us-container">
        <div className="about-us-image">
          <img src={AboutImage} alt="About-img" />
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card card-hover">
              <FaChalkboardTeacher className="about-icon" />
              <h5>10000+</h5>
              <small>Teachering Exp.(Hours)</small>
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
            Rhythmicstan was founded in 2015 with the goal of providing
            high-quality music education to people all around India. The aim is
            not only to help students develop a lifelong appreciation for music
            but to provide them with musical knowledge and experience that would
            truly enable them to achieve their musical aspirations whether
            professional or recreational. We focus on regular performances and
            necessary theoretical sessions in addition to regular music classes.
            We also encourage our students to take International Music Exams
            such as Rockschool, Trinity College London, and ABRSM, which help
            them acquire a well-rounded musical education.
          </p>

          <Link className="btn btn-primary" to="/about">
            {" "}
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
