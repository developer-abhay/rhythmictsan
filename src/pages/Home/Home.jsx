import Hero from "../../sections/Hero/Hero";
import AboutUs from "../../sections/AboutUs/AboutUs";
import DemoCourses from "../../sections/DemoCourses/DemoCourses";
import DemoFaculty from "../../sections/DemoFaculty/DemoFaculty";
import WhyUs from "../../sections/WhyUs/WhyUs";
import Testimonials from "../../sections/Testimonials/Testimonials";
import ContactUs from "../../sections/ContactForm/ContactUs";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

const Home = () => (
  <div>
    <Hero />
    <Slider />
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
