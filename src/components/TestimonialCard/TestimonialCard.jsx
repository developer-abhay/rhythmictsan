import { RiDoubleQuotesL } from "react-icons/ri";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, title, feedback, img }) => {
  return (
    <div className="testimonial card-hover">
      <div className="testimonial-text">
        <RiDoubleQuotesL className="testimonial-icon" />
        <p>{feedback}</p>
      </div>
      <div className="testimonial-user">
        <div className="user-image">
          <img src={img} alt="" />
        </div>
        <div className="user-info">
          <h3 className="user-name">{name}</h3>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
