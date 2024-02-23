import "./FacultyCard.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FacultyCard = ({ img, title, name }) => {
  return (
    <Link to="/facultyProfile">
      <div className="faculty-card card-hover">
        <img className="faculty-img" src={img} alt="Faculty Image" />
        <h5>{name}</h5>
        <h6>{title}</h6>

        <div className="faculty-socials">
          <a href="" target="_blank">
            <FaFacebookF className="icon" />
          </a>
          <a href="" target="_blank">
            <FaInstagramSquare className="icon" />
          </a>
          <a href="" target="_blank">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default FacultyCard;
