import Hero from "../../sections/Hero/Hero";
import AboutUs from "../../sections/AboutUs/AboutUs";
import DemoCourses from "../../sections/DemoCourses";
import DemoFaculty from "../../sections/DemoFaculty";
import WhyUs from "../../sections/WhyUs";
import Testimonials from "../../sections/Testimonials";
import ContactUs from "../../sections/ContactForm/ContactUs";
import "./Home.css";

const Home = () => (
  <div>
    <Hero />
    <AboutUs />
    <DemoCourses />
    <DemoFaculty />
    <WhyUs />
    <Testimonials />
    <ContactUs />
  </div>
);

export default Home;

// bg-gradient-to-r from-purple-500 to-pink-500
