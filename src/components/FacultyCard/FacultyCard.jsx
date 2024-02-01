import "./FacultyCard.css";
import FacultyImg from "/assets/images/banner.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FacultyCard = () => {
  return (
    <div className="faculty-card">
      <img className="faculty-img" src={FacultyImg} alt="" />
      <h5>Ravi Kumar</h5>
      <h6>Chief Executive</h6>

      <div className="faculty-socials">
        <FaFacebookF />
        <FaInstagramSquare />
        <FaYoutube />
        <FaTwitter />
      </div>
    </div>
  );
};

export default FacultyCard;
