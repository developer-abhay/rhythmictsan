import { RiDoubleQuotesL } from "react-icons/ri";
import "./TestimonialCard.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial">
      <RiDoubleQuotesL className="testimonial-icon" />
      <p>
        Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas
        scelerisque orci. Maecenas a finibus odio.
      </p>
      <div>
        <div className="user-image">
          <img src="http://placehold.it/60x60" alt="" />
        </div>
        <div className="user-info">
          <h3 className="user-name">Catherine Soft</h3>
          <span>Managing Director</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
