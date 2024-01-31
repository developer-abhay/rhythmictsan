import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section className="section colored" id="contact-us">
      <div className="container">
        {/*          <!-- ***** Section Title Start ***** --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Talk To Us</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                {" "}
                Have Some Queries? Use the form below to get in touch with us
              </p>
            </div>
          </div>
        </div>
        {/*          <!-- ***** Section Title End ***** --> */}

        <div className="row">
          {/*              <!-- ***** Contact Text Start ***** --> */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5 className="margin-bottom-30">Keep in touch</h5>
            <div className="contact-text">
              <p>
                <strong>Registered Office Address : </strong>
                <br />
                G-2, South Extension Part 2, New Delhi, Near Leela Ram Market
                Masjid Moth.
              </p>
              <p>
                <strong> Office Contact Number : </strong> 8376018183{" "}
              </p>
            </div>
          </div>
          {/*              <!-- ***** Contact Text End ***** --> */}

          {/*              <!-- ***** Contact Form Start ***** --> */}
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="contact-form">
              <form id="contact" action="" method="get">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="E-Mail Address"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button"
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- ***** Contact Form End ***** --> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
