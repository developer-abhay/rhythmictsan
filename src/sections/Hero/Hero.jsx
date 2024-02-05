import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="layer"></div>
      <div className="details">
        <h3>RHYTHMICSTAN</h3>
        <h1>Music For All</h1>

        <div className="hero-btns">
          <a href="#contact-us" className=" btn btn-primary">
            Contact Us
          </a>
          <a href="#about-us" className="btn btn-primary">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
