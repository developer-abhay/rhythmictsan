import CourseCard from "../components/CourseCard/CourseCard";
const DemoCourses = () => {
  return (
    <section className="demo-course">
      <h6>Our Courses</h6>
      <h3>Instruments</h3>
      <div className="course-card-container">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};

export default DemoCourses;
