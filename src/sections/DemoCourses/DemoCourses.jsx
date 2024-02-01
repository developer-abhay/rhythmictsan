import CourseCard from "../../components/CourseCard/CourseCard";
import "./DemoCourses.css";

const DemoCourses = () => {
  return (
    <section className="demo-course">
      <h5>Our Courses</h5>
      <h2>Instruments</h2>
      <div className="container course-card-container">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};

export default DemoCourses;
