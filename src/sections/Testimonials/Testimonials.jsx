import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { testimonialObject } from "../../data/testimonials";
import "./Testmonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What do they say?</h5>
      <h2>Our Testimonials</h2>
      <div className="container testimonials-container">
        {testimonialObject.map(({ id, name, title, feedback, img }) => (
          <TestimonialCard
            key={id}
            name={name}
            title={title}
            feedback={feedback}
            img={img}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
