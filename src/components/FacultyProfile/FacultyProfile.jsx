import bgImg from "../../../public/assets/images/about page/about1.avif";
import WhyUsCard from "../../components/WhyUsCard/WhyUsCard";
//Icons
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import "./FacultyProfile.css";

const FacultyProfile = ({ name, title, img, desc }) => {
  return (
    <div className="faculty-profile">
      <div className="bg-img-container">
        <img src={bgImg} alt="" />
      </div>
      <div className="profile-pic">
        <img src={img} alt="" />
      </div>
      <div className="profile-details container">
        <div className="socials">
          <div>
            <AiFillInstagram className="icon" />
            <FaTwitter className="icon" />
            <IoMail className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        {/* Header */}
        <div className="header">
          <div>
            <h4>{name}</h4>
            <h6>{title} @rhythmicstan</h6>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <WhyUsCard
            title1=""
            title2="Background and Experience"
            text={desc[1]}
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Areas of Expertise"
            text={desc[2]}
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Teaching Philosophy"
            text={desc[3]}
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Accomplishments and Contributions"
            text={desc[4]}
            btnClass="display-none"
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
