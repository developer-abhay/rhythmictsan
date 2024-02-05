import Hero from "../../sections/Hero/Hero";
import AboutUs from "../../sections/AboutUs/AboutUs";
import DemoCourses from "../../sections/DemoCourses/DemoCourses";
import DemoFaculty from "../../sections/DemoFaculty/DemoFaculty";
import Testimonials from "../../sections/Testimonials/Testimonials";
import ContactUs from "../../sections/ContactForm/ContactUs";
import Slider from "../../components/Slider/Slider";

const Home = () => (
  <div>
    <Hero />
    <Slider />
    <AboutUs />
    <DemoCourses />
    <DemoFaculty />
    <Testimonials />
    <ContactUs />
  </div>
);

export default Home;
