// import Banner from "../../components/Banner/Banner";
import FacultyCard from "../../components/FacultyCard/FacultyCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Faculty.css";

const Faculty = () => {
  return (
    <div className="faculty-page container">
      <Sidebar />
      <div className="faculty-page-container">
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
      </div>
    </div>
  );
};

export default Faculty;
