import React from "react";
import "./WhyUsCard.css";

const WhyUsCard = ({
  title1,
  title2,
  text,
  btnText,
  btnURL,
  btnClass,
  img,
}) => {
  return (
    <div className="why-us-card">
      {img.length == 0 ? (
        ""
      ) : (
        <div className="img-container">
          <img src={img} alt="" />
        </div>
      )}
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
