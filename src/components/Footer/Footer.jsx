import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-purple-600 p-16">
      <div className="flex justify-between pb-6">
        <div>
          <h1>logo</h1>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <h1>Information </h1>
          <ul>
            <li>About Us</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Events</li>
          </ul>
        </div>
        <div>
          <h1>Helpful Links </h1>
          <ul>
            <li>Services</li>
            <li>Supports</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col">
          Subscribe for more{" "}
          <input type="text" placeholder="Enter Your Email" />{" "}
          <button>Submit</button>
        </div>
      </div>
      <hr />
      <div className="pt-6">
        Socials COPYRIGHT © 2024 RHYTHMICSTAN MUSIC ACADEMY
      </div>
    </footer>
  );
};

export default Footer;
