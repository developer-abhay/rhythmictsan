import FacultyCard from "../../components/FacultyCard/FacultyCard";
import facultyDrum from "../../../public/assets/images/faculty/piano.jpeg";

import "./DemoFaculty.css";

const DemoFaculty = () => {
  return (
    <section id="demo-faculty">
      <h5>Meet our Team</h5>
      <h2>Awesome Faculty</h2>
      <div className="container demo-faculty-container">
        <FacultyCard img={facultyDrum} title="Drum Faculty" name="Ravi Kumar" />
        <FacultyCard img={facultyDrum} title="Drum Faculty" name="Ravi Kumar" />
        <FacultyCard img={facultyDrum} title="Drum Faculty" name="Ravi Kumar" />
      </div>
      <a href="" className="btn btn-primary">
        All Members
      </a>
    </section>
  );
};

export default DemoFaculty;
