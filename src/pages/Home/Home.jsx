import Hero from "../../sections/Home/Hero";
import Stats from "../../sections/Home/Stats";
import DemoCourses from "../../sections/Home/DemoCourses";
import AboutUs from "../../sections/Home/AboutUs";
import DemoFaculty from "../../sections/Home/DemoFaculty";
import WhyUs from "../../sections/Home/WhyUs";
import Testimonials from "../../sections/Home/Testimonials";
import ContactUs from "../../sections/Home/ContactUs";
import "./Home.css";

const Home = () => (
  <div>
    <Hero />
    <Stats />
    <DemoCourses />
    <AboutUs />
    <DemoFaculty />
    <WhyUs />
    <Testimonials />
    <ContactUs />
  </div>
);

export default Home;

// bg-gradient-to-r from-purple-500 to-pink-500
