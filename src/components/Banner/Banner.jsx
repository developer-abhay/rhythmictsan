import { IoIosArrowForward } from "react-icons/io";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <h4>About Us</h4>
      <div>
        <p>Home</p>
        <span>
          <IoIosArrowForward />
        </span>
        <p>About</p>
      </div>
    </div>
  );
};

export default Banner;
