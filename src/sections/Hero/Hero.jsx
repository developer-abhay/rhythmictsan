import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="layer"></div>
      <div className="details">
        <h3>Music For All</h3>
        <h1>RHYTHMICSTAN</h1>

        <div className="hero-btns">
          <a href="#contact-us" className=" btn btn-primary">
            Contact Us
          </a>
          <a href="#about-us" className="btn">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
