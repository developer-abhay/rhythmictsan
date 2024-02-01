import FacultyCard from "../../components/FacultyCard/FacultyCard";
import "./DemoFaculty.css";

const DemoFaculty = () => {
  return (
    <section id="demo-faculty">
      <h5>Meet our Team</h5>
      <h2>Awesome Faculty</h2>
      <div className="container demo-faculty-container">
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
      </div>
      <a href="" className="btn btn-primary">
        All Members
      </a>
    </section>
  );
};

export default DemoFaculty;
