// import Banner from "../../components/Banner/Banner";
import { facultyObject } from "../../data/faculty";
import FacultyCard from "../../components/FacultyCard/FacultyCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Faculty.css";

const Faculty = () => {
  return (
    <div className="faculty-page container">
      <Sidebar />
      <div className="faculty-page-container">
        {facultyObject.map(({ id, name, title, img, socials }) => (
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
  );
};

export default Faculty;
