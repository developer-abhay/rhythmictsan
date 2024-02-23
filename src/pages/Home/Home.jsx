import Hero from "../../sections/Hero/Hero";
import AboutUs from "../../sections/AboutUs/AboutUs";
import DemoCourses from "../../sections/DemoCourses/DemoCourses";
import DemoFaculty from "../../sections/DemoFaculty/DemoFaculty";
import Testimonials from "../../sections/Testimonials/Testimonials";
import ContactUs from "../../sections/ContactForm/ContactUs";
import Slider from "../../components/Slider/Slider";
import "./Home.css";
import WhyUsCard from "../../components/WhyUsCard/WhyUsCard";

const Home = () => (
  <div>
    <Hero />
    <Slider />
    <AboutUs />
    <DemoCourses />
    <DemoFaculty />
    <div className="why-us-container container">
      <WhyUsCard
        title1="Why choose us ?"
        title2="SIMPLE AND EASY TO LEARN"
        text="we offer a wide variety of music courses taught by experienced instructors. Whether you're just starting out or you're already a skilled musician, we have something for you. Our classes are designed to be easy to understand, even if you're new to music. We break down complex ideas into simple steps, so you can learn at your own pace. With us, you'll find learning music is fun and rewarding, no matter your skill level."
        btnText="Book a Demo"
        btnURL="#book-demo"
      />

      <WhyUsCard
        title1="Discover More"
        title2="UNLOCK YOUR CREATIVITY"
        text="Explore your creativity with Rhythmicstan! Our classes are designed to help you discover your unique musical style. Whether you're interested in writing songs, playing instruments, or performing, we have something for everyone. Our teachers encourage you to try new things and express yourself in your own way. With us, you'll have the freedom to experiment and unlock your full creative potential."
        btnText="Read More"
        btnURL="/about"
      />

      <WhyUsCard
        title1="Find your Rhythm"
        title2="MUSIC FOR ALL"
        text="At Rhythmicstan, we believe music is for everyone. It doesn't matter how old you are or whether you've ever played an instrument before. We have programs for all ages and skill levels, so you can start your musical journey today. Our friendly teachers and supportive community make learning music easy and fun. Join us and discover the joy of making music, no matter who you are."
        btnText="Enroll Now"
        btnURL="#demo-course"
      />
    </div>
    <Testimonials />
    <ContactUs />
  </div>
);

export default Home;
