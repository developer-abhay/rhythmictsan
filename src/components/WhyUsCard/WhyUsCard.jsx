import React from "react";
import "./WhyUsCard.css";
import WhyUsImg from "../../../public/assets/images/banner.jpg";

const WhyUsCard = () => {
  return (
    <div className="why-us-card">
      <img src={WhyUsImg} alt="" />
      <div>
        <h6>Why Choose Us</h6>
        <h5>Simple and Easy to Learn</h5>
        <p>
          We offer a wide range of music courses, taught by experienced faculty.
          Whether you're abeginner or an advanced musician, we have the perfect
          program for you.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default WhyUsCard;
