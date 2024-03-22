// import Banner from "../../components/Banner/Banner";
import { facultyObject } from "../../data/faculty";
import FacultyCard from "../../components/FacultyCard/FacultyCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Faculty.css";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";

const Faculty = () => {
  const [filter, setFilter] = useState("all");
  const [filteredArray, setFilteredArray] = useState(facultyObject);

  useEffect(() => {
    if (filter == "all") {
      setFilteredArray(facultyObject);
    } else {
      const newFilters = filter.split(" ");
      setFilteredArray(
        facultyObject.filter((faculty) =>
          faculty.title.includes(
            newFilters.length == 1 ? filter : newFilters[0]
          )
        )
      );
    }
  }, [filter]);
  return (
    <div className="faculty-page">
      <Banner title="Faculty" />

      <div className="faculty-page-container ">
        <Sidebar setFilter={setFilter} />
        <div className="faculties-container">
          {filteredArray.map(({ id, name, title, img, socials }) => (
            <FacultyCard
              key={id}
              name={name}
              title={title}
              img={img}
              socials={socials}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
