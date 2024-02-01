import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What do they say?</h5>
      <h2>Our Testimonials</h2>
      <div className="container testimonials-container">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
