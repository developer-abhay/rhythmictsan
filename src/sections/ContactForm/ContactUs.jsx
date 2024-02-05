import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiWhatsappLine } from "react-icons/ri";
import { MdOutlineLocalPhone } from "react-icons/md";

import "./ContactUs.css";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const contactForm = document.querySelector("#contact-form");

    emailjs
      .sendForm(
        "rhythmicstan_query_form",
        "query_form_template",
        form.current,
        "lh_DXYwT2CXz81fZe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    contactForm.reset();
  };
  return (
    <section id="contact-us">
      <h2 className="section-title">Talk To Us</h2>
      <h5>Have Some Queries? Use the form below to get in touch with us</h5>
      <div className="container contact-us-container">
        <div className="contact-left">
          <div className="contact-text">
            <h5>Keep in touch</h5>
            <p>
              <strong>Registered Office Address : </strong>
              <br />
              G-2, South Extension Part 2, New Delhi, <br /> Near Leela Ram
              Market Masjid Moth.
            </p>
            <p>
              <strong> Office Contact Number : </strong> 8750209070
            </p>
          </div>
          <div className="contact-options">
            <article className="contact-option">
              <div>
                <MdOutlineLocalPhone className="contact-option-icon" />
                <h5>Phone</h5>
              </div>

              <h6>+91 8750209070</h6>
              <h6>+91 8376018183</h6>

              <a href="tel:8750209070" target="_blank" rel="noreferrer">
                Give a Call
              </a>
            </article>
            <article className="contact-option">
              <div>
                <RiWhatsappLine className="contact-option-icon" />
                <h5>WhatsApp</h5>
              </div>
              <h6>+91 8750209070</h6>
              <h6>+91 8376018183</h6>
              <a
                href="https://api.whatsapp.com/send?phone=918750209070"
                target="_blank"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </article>
          </div>
        </div>

        <div className="contact-form">
          <form
            id="contact-form"
            action=""
            method="get"
            ref={form}
            onSubmit={sendEmail}
          >
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

            <button
              type="submit"
              value="Send"
              id="form-submit"
              className="btn btn-primary "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
