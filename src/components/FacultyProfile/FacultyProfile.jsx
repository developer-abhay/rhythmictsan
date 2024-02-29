import WhyUsCard from "../../components/WhyUsCard/WhyUsCard";
//Icons
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import "./FacultyProfile.css";

const FacultyProfile = ({
  name,
  title,
  img,
  img2,
  desc,
  bioImages,
  socials,
}) => {
  return (
    <div className="faculty-profile ">
      {/* Header */}
      <div className="profile-header container">
        <div className="profile-pic">
          <img src={name == "Mr. Ravi Kumar" ? img2 : img} alt="" />
        </div>

        <div className="header-text">
          <h4>{name}</h4>
          <h6>{title} @rhythmicstan</h6>
          {socials ? (
            <div className="socials">
              <AiFillInstagram className="icon" />
              <FaTwitter className="icon" />
              <IoMail className="icon" />
              <FaYoutube className="icon" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="profile-details container">
        {/* Content */}
        <div className="content">
          <WhyUsCard
            title1=""
            title2="Background and Experience"
            img={bioImages["bioImg1"]}
            text={desc[1]}
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Areas of Expertise"
            img={bioImages["bioImg2"]}
            text={desc[2]}
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Teaching Philosophy"
            img={bioImages["bioImg3"]}
            text={desc[3]}
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Accomplishments and Contributions"
            img={bioImages["bioImg4"]}
            text={desc[4]}
            btnClass="display-none"
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
