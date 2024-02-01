import img from "/assets/images/heroCover.avif";
import "./CourseCard.css";
const CourseCard = () => {
  return (
    <div className="course-card">
      <img className="card-img" src={img} alt="" />
      <h5>Guitar Course</h5>
      <h6>Beginner to Advanced</h6>
      {/* <p>
        From beginner chords to advanced techniques, join us on a musical
        journey to unleash your inner guitarist
      </p> */}
      <div className="card-btns">
        <button>Enroll Now</button>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default CourseCard;
