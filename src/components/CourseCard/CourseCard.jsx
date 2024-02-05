import "./CourseCard.css";
const CourseCard = ({ name, info, img }) => {
  return (
    <div className="course-card">
      <div className="course-card-img">
        <img className="card-img" src={img} alt="" />
      </div>
      <div className="course-card-content">
        <h4>{name}</h4>
        <p>{info}</p>

        <a className="btn btn-primary" href="#book-demo">
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
