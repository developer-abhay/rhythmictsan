import CourseCard from "../../components/CourseCard/CourseCard";
const DemoCourses = () => {
  return (
    <section className="font-bold h-screen bg-pink-400">
      <h4>Our Courses</h4>
      <h1>Instruments</h1>
      <div className="container">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};

export default DemoCourses;
