import FacultyCard from "../../components/FacultyCard/FacultyCard";
import "./DemoFaculty.css";

const DemoFaculty = () => {
  return (
    <section className="">
      <h5>Meet our Team</h5>
      <h2>Awesome Faculty</h2>
      <div className="container demo-faculty-container">
        <FacultyCard />
        <FacultyCard />
        <FacultyCard />
      </div>
    </section>
  );
};

export default DemoFaculty;
