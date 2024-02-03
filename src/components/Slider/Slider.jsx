import Studios09 from "../../../public/assets/logos/09-studios.jpg";
import RockSchool from "../../../public/assets/logos/rock-school.png";
import Trinity from "../../../public/assets/logos/trinity-college.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="logos-slider">
      <div class="logos-slide">
        <img src={Studios09} />
        <img src={Trinity} />
        <img src={RockSchool} />
        <img src={Studios09} />
        <img src={Trinity} />
        <img src={RockSchool} />
      </div>
      <div class="logos-slide">
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
