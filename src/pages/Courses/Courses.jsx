import { courseObject } from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Courses.css";
import Banner from "../../components/Banner/Banner";

const Faculty = () => {
  return (
    <div className="course-page">
      <Banner title="Courses" />
      <div className="course-page-container ">
        <Sidebar />
        <div className="courses-container">
          {courseObject.map(({ id, name, info, img }) => (
            <CourseCard key={id} name={name} info={info} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
