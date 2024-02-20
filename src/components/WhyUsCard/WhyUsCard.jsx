import React from "react";
import "./WhyUsCard.css";
import WhyUsImg from "/assets/images/about.jpg";

const WhyUsCard = () => {
  return (
    <div className="why-us-card">
      <img src={WhyUsImg} alt="" />
      <div>
        <h5>Why Choose Us ?</h5>
        <h4>Simple and Easy to Learn</h4>
        <p>
          We offer a wide range of music courses, taught by experienced faculty.
          Whether you're abeginner or an advanced musician, we have the perfect
          program for you.We offer a wide range of music courses, taught by
          experienced faculty. Whether you're abeginner or an advanced musician,
          we have the perfect program for you.We offer a wide range of music
          courses, taught by experienced faculty. Whether you're abeginner or an
          advanced musician, we have the perfect program for you.
        </p>
        <a className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default WhyUsCard;
