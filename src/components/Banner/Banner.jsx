import { FaChevronRight } from "react-icons/fa";
import "./Banner.css";

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <div className="layer"></div>
      <div className="banner-text">
        <h4>Home</h4>
        <FaChevronRight className="icon" />
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Banner;
