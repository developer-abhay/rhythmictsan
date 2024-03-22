import { courseObject } from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Courses.css";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";

const Courses = () => {
  const [filter, setFilter] = useState("all");
  const [filteredArray, setFilteredArray] = useState(courseObject);

  useEffect(() => {
    if (filter == "all") {
      setFilteredArray(courseObject);
    } else {
      const newFilters = filter.split(" ");
      setFilteredArray(
        courseObject.filter((course) =>
          course.name.includes(
            newFilters.length == 1
              ? filter
              : course.name.includes(newFilters[1])
              ? newFilters[1]
              : newFilters[0]
          )
        )
      );
    }
  }, [filter]);

  return (
    <div className="course-page">
      <Banner title="Courses" />
      <div className="course-page-container ">
        <Sidebar setFilter={setFilter} />
        <div className="courses-container">
          {filteredArray.map(({ id, name, info, img }) => (
            <CourseCard key={id} name={name} info={info} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
