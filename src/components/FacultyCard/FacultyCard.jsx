import "./FacultyCard.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FacultyCard = ({ img, title, name }) => {
  const scrollTo = () => {
    window.scrollTo({
      top: "0px",
      behavior: "smooth",
    });
  };
  return (
    <Link to={`/facultyProfile/${name}`} onClick={scrollTo}>
      <div className="faculty-card card-hover">
        <img className="faculty-img" src={img} alt="Faculty Image" />
        <h5>{name}</h5>
        <h6>{title}</h6>

        <div className="faculty-socials">
          <FaFacebookF className="icon" />
          <FaInstagramSquare className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </Link>
  );
};

export default FacultyCard;
