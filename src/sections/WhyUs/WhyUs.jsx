import WhyUsCard from "../../components/WhyUsCard/WhyUsCard";
import "./WhyUs.css";
const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="container">
        <WhyUsCard />
        <WhyUsCard className="experiment" />
        <WhyUsCard />
      </div>
    </section>
  );
};

export default WhyUs;
