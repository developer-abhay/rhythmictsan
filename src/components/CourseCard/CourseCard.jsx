import img from "/assets/images/heroCover.avif";
import "./CourseCard.css";
const CourseCard = () => {
  return (
    <div className="course-card">
      <img className="card-img" src={img} alt="" />
      <h4>Guitar Course</h4>
      <p>lorem ipsum</p>
      <div className="card-btns">
        <button>Buy Now</button>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default CourseCard;
