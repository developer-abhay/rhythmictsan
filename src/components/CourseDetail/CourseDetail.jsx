import "./CourseDetail.css";

const CourseDetail = ({ img, detail }) => {
  console.log(typeof detail.curriculum);
  return (
    <main className="course-details container">
      <h1>{detail.name}</h1>
      <div className="overview">
        <div>
          <h3>Overview</h3>
          <p>{detail.overview}</p>
        </div>
        <div className="overview-img">
          <img src={img} alt="" />
        </div>
      </div>

      <h3>Course Curriculum</h3>
      <p>
        We have different curriculum for different levels of experiences.
        Following are some of the important things that you'll learn during the
        course duration:
      </p>
      <div className="curriculum-details">
        {typeof detail.curriculum == "object" ? (
          Object.entries(detail.curriculum).map(([key, value], i) => {
            return (
              <div key={i}>
                <h5>{key}</h5>
                <ul>
                  {value.map((text, index) => {
                    return <li key={index}>{text}</li>;
                  })}
                </ul>
              </div>
            );
          })
        ) : (
          <p> {detail.curriculum}</p>
        )}
      </div>

      <h3>Instructor Details</h3>
      <p>{detail.instructor}</p>

      <h3>Course Features</h3>
      <p>{detail.features}</p>

      <h3>Prerequisites</h3>
      <p>{detail.prerequisites}</p>

      <h3>Enrollment Information</h3>
      <p>Book a Demo and {detail.enrollment}</p>
    </main>
  );
};

export default CourseDetail;
