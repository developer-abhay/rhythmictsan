import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section id="contact-us">
      <h2 className="section-title">Talk To Us</h2>
      <h5>Have Some Queries? Use the form below to get in touch with us</h5>
      <div className="container contact-us-container">
        <div className="contact-text">
          <h5>Keep in touch</h5>
          <p>
            <strong>Registered Office Address : </strong>
            <br />
            G-2, South Extension Part 2, New Delhi, <br /> Near Leela Ram Market
            Masjid Moth.
          </p>
          <p>
            <strong> Office Contact Number : </strong> 8376018183
          </p>
        </div>

        <div className="contact-form">
          <form id="contact" action="" method="get">
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name"
              required=""
            />
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="E-Mail Address"
              required=""
            />
            <textarea
              name="message"
              rows="6"
              className="form-control"
              id="message"
              placeholder="Your Message"
              required=""
            />

            <button type="submit" id="form-submit" className="btn btn-primary ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
