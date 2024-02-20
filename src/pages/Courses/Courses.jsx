import { courseObject } from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Courses.css";

const Faculty = () => {
  return (
    <div className="course-page container">
      <Sidebar />
      <div className="course-page-container">
        {courseObject.map(({ id, name, info, img }) => (
          <CourseCard key={id} name={name} info={info} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
