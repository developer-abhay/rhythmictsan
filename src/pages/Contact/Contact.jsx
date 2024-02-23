// import Banner from "../../components/Banner/Banner";
import Banner from "../../components/Banner/Banner";
import ContactUs from "../../sections/ContactForm/ContactUs";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Banner title="Contact" />
      <ContactUs />
    </div>
  );
};

export default Contact;
