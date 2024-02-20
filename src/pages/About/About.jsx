import AboutUs from "../../sections/AboutUs/AboutUs";
import WhyUsCard from "../../components/WhyUsCard/WhyUsCard";
import ContactUs from "../../sections/ContactForm/ContactUs";
import "./About.css";
//Banner photos
import img1 from "/assets/images/about page/about1.avif";
import img2 from "/assets/images/about page/about2.avif";
import img3 from "/assets/images/about page/about3.avif";
import img4 from "/assets/images/about page/about4.avif";
import img5 from "/assets/images/about page/about5.avif";
import img6 from "/assets/images/about page/about6.avif";
import img7 from "/assets/images/about page/about7.avif";
import img8 from "/assets/images/about page/about8.avif";
import img9 from "/assets/images/about page/about9.avif";

const About = () => {
  return (
    <main className="about-page ">
      {/* Our Mission */}
      <div className="our-mission container">
        <div className="mission-img-1">
          <img src={img1} alt="" />
        </div>
        <div className="mission-img-2">
          <img src={img2} alt="" />
        </div>
        <div className="mission-img-3">
          <img src={img3} alt="" />
        </div>
        <div className="mission-img-4">
          <img src={img4} alt="" />
        </div>
        <div className="mission-img-5">
          <img src={img5} alt="" />
        </div>
        <div className="mission-img-6">
          <img src={img6} alt="" />
        </div>
        <div className="mission-img-7">
          <img src={img7} alt="" />
        </div>
        <div className="mission-img-8">
          <img src={img8} alt="" />
        </div>
        <div className="mission-img-9">
          <img src={img9} alt="" />
        </div>

        <span className="mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to share our love for music and help people all over
            India discover it's joy. Since 2015, we've been dedicated to
            teaching music in a fun and supportive way. We want to help our
            students not only learn how to play instruments but also understand
            and appreciate music deeply. Whether someone dreams of becoming a
            professional musician or just wants to play for fun, we're here to
            support them in every step of the way. We believe in giving our
            students plenty of chances to perform and learn the theory behind
            music, so they become well-rounded musicians. We also encourage them
            to take exams like Rockschool, Trinity College London, and ABRSM,
            which are recognized worldwide.
          </p>
        </span>
      </div>

      {/* Events */}
      <section className="events">
        <h5>Our Organized</h5>
        <h2>Events</h2>
        <div className="events-container container">
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
        </div>
      </section>
    </main>
  );
};

export default About;
