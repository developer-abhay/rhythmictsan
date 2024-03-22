import "./CourseDetail.css";

const CourseDetail = ({ name, img, info, detail }) => {
  return (
    <main className="course-details">
      <h1>{detail["Course Title"]}</h1>
      <p>{detail["Course Overview"]}</p>
      <h1>Instructor Details</h1>
      <p>{detail["Instructor Details"]}</p>
      <h1>Course Features</h1>
      <p>{detail["Course Features"]}</p>
    </main>
  );
};

export default CourseDetail;
