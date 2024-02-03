// import Banner from "../../components/Banner/Banner";
import CourseCard from "../../components/CourseCard/CourseCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Courses.css";

const Faculty = () => {
  return (
    <div className="course-page container">
      <Sidebar />
      <div className="course-page-container">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Faculty;
