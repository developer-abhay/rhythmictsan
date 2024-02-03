import AboutUs from "../../sections/AboutUs/AboutUs";
import WhyUsCard from "../../components/WhyUsCard/WhyUsCard";
import ContactUs from "../../sections/ContactForm/ContactUs";
import "./About.css";

const About = () => {
  return (
    <main className="about-page ">
      {/* Our Mission */}
      <div className="our-mission container">
        <div className="mission-img-1"></div>
        <div className="mission-img-2"></div>
        <div className="mission-img-3"></div>
        <div className="mission-img-4"></div>
        <div className="mission-img-5"></div>
        <div className="mission-img-6"></div>
        <div className="mission-img-7"></div>
        <div className="mission-img-8"></div>
        <div className="mission-img-9"></div>

        <span className="mission">
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, magnam
            ipsum ullam a illum laudantium aperiam culpa similique accusamus
            qui! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis vero officia sapiente mollitia nihil adipisci dolor a
            voluptas quia quisquam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eius libero inventore aliquam voluptate sit!
            Repudiandae ad incidunt perferendis quam vel.
          </p>
        </span>
      </div>

      {/* About Us */}
      <AboutUs className="about-us-info" />
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
      <ContactUs />
    </main>
  );
};

export default About;
