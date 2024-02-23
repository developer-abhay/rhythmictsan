import React from "react";
import "./WhyUsCard.css";
import WhyUsImg from "/assets/images/about.jpg";

const WhyUsCard = ({ title1, title2, text, btnText, btnURL, btnClass }) => {
  return (
    <div className="why-us-card">
      <div className="img-container">
        <img src={WhyUsImg} alt="" />
      </div>
      <div className="details">
        <h5>{title1}</h5>
        <h4>{title2}</h4>
        <p>{text}</p>
        <a className={`btn btn-primary ${btnClass}`} href={btnURL}>
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default WhyUsCard;
