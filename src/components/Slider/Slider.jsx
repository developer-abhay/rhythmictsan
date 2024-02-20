import Studios09 from "/assets/logos/09-studios.jpg";
import RockSchool from "/assets/logos/rock-school.png";
import Trinity from "/assets/logos/trinity-college.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="logos-slider">
      <div className="logos-slide">
        <img src={Studios09} />
        <img src={Trinity} />
        <img src={RockSchool} />
        <img src={Studios09} />
        <img src={Trinity} />
        <img src={RockSchool} />
      </div>
      <div className="logos-slide">
        <img src={Studios09} />
        <img src={Trinity} />
        <img src={RockSchool} />
        <img src={Studios09} />
        <img src={Trinity} />
        <img src={RockSchool} />
      </div>
    </div>
  );
};

export default Slider;
