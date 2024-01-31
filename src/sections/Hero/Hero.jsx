import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="layer"></div>
      <div className="details">
        <h3>Music For All</h3>
        <h1>RHYTHMICSTAN</h1>

        <div className="hero-btns">
          <button className="primary-btn"> Contact Us </button>
          <button className="secondary-btn"> Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
