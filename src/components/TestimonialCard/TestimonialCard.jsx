import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="team-item">
        <div className="team-content">
          <i>
            <img src="assets/images/testimonial-icon.png" alt="" />
          </i>
          <p>
            Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas
            scelerisque orci. Maecenas a finibus odio.
          </p>
          <div className="user-image">
            <img src="http://placehold.it/60x60" alt="" />
          </div>
          <div className="team-info">
            <h3 className="user-name">Catherine Soft</h3>
            <span>Managing Director</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
