import logo from "../../../public/assets/images/rhythmicstan.png";
import bgImg from "../../../public/assets/images/about page/about1.avif";
import profilePic from "../../../public/assets/images/faculty/ravi_guitar2.jpeg";
import WhyUsCard from "../../components/WhyUsCard/WhyUsCard";
//Icons
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import "./FacultyProfile.css";

const FacultyProfile = () => {
  return (
    <div className="faculty-profile">
      <div className="bg-img-container">
        <img src={bgImg} alt="" />
      </div>
      <div className="profile-pic">
        <img src={profilePic} alt="" />
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
            <h4>RAVI KUMAR</h4>
            <h6>Founder and CEO @rhythmicstan</h6>
          </div>
          <div className="header-col2">
            <div>
              <img src={logo} alt="" />
              <p>Rhythmicstan</p>
            </div>
            <div>
              <img src={logo} alt="" />
              <p>Rhythmicstan</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <WhyUsCard
            title1=""
            title2="Background and Experience"
            text="Mr. Ravi Kumar is not only the founder and CEO of Rhythmicstan but also a passionate and experienced guitar instructor with over 15 years of teaching experience. He holds a Bachelor's degree in Music Education from [University Name] and has dedicated his career to sharing his love of music with students of all ages and skill levels."
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Areas of Expertise"
            text="As a guitar teacher, Mr. Ravi Kumar specializes in various styles of guitar playing, including classical, acoustic, electric, and fingerstyle. His versatile approach allows students to explore different genres and techniques, empowering them to become well-rounded and expressive guitarists."
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Teaching Philosophy"
            text="Mr. Ravi Kumar believes in creating a supportive and encouraging learning environment where students can develop their musical talents to the fullest. His teaching philosophy emphasizes the importance of patience, persistence, and passion in mastering the guitar. Through personalized instruction and constructive feedback, he inspires students to reach their full potential and achieve their musical goals."
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Accomplishments and Contributions"
            text="In addition to his role as a guitar teacher, Mr. Ravi Kumar has made significant contributions to the music education community. He has been recognized for his innovative teaching methods and has conducted workshops and seminars on guitar playing techniques. As the founder and CEO of Rhythmicstan, he has played a pivotal role in shaping the academy into a premier destination for music education and performance."
            btnClass="display-none"
          />
          <WhyUsCard
            title1=""
            title2="Personal Interests and Hobbies"
            text="Outside of music, Mr. Ravi Kumar enjoys spending time outdoors, hiking, and traveling to new destinations. He is also an avid reader and enjoys exploring different genres of literature in his free time."
            btnClass="display-none"
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
