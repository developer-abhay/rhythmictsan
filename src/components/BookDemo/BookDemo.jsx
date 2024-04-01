import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./BookDemo.css";
import DemoModal from "./DemoModal";

const BookDemo = () => {
  const demoClass = useRef();
  const [status, setStatus] = useState("success");

  const demoClassMail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const demoClassForm = document.querySelector("#book-demo-form");

    if (formProps.user_name == "" || formProps.user_mobile == "") {
      setStatus("error");
    } else {
      setStatus("success");
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
    }

    setTimeout(() => {
      const modal = document.querySelector(".demo-modal");
      modal.classList.add("demo-modal-visible");
      setTimeout(() => {
        modal.classList.remove("demo-modal-visible");
      }, 3500);
    }, 0); // Delay execution to ensure status update takes effect
  };

  return (
    <section className="book-demo-form" id="book-demo">
      <DemoModal status={status} />
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
            className="btn btn-primary"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookDemo;
