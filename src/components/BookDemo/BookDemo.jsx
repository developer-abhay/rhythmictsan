import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./BookDemo.css";

const BookDemo = () => {
  const demoClass = useRef();

  const demoClassMail = (e) => {
    e.preventDefault();

    const demoClassForm = document.querySelector("#book-demo-form   ");

    emailjs
      .sendForm(
        "rhythmicstan_query_form",
        "book_demo_template",
        demoClass.current,
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
    demoClassForm.reset();
  };
  return (
    <section className="book-demo-form" id="book-demo">
      <div className="container">
        <h4>Book a Demo Class Now</h4>
        <form
          id="book-demo-form"
          action=""
          method="get"
          ref={demoClass}
          onSubmit={demoClassMail}
        >
          <input
            name="user_name"
            type="text"
            className="form-control"
            id="user-name"
            placeholder="Full Name"
            required=""
          />
          <input
            name="user_mobile"
            type="phone"
            className="form-control"
            id="phone"
            placeholder="Mobile Number"
            required=""
          />

          <button
            type="submit"
            value="Send"
            id="book-demo-form-submit"
            className="btn btn-primary "
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookDemo;
