import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import "./DemoModal.css";

const DemoModal = ({ status }) => {
  return (
    <div className={`demo-modal demo-modal-${status}`}>
      {status == "success" ? (
        <>
          <FaCheckCircle />
          <p>Your Demo has been Booked !</p>
        </>
      ) : (
        <>
          <FaCircleXmark />
          <p>Please Enter a Valid Name and Number !</p>
        </>
      )}
    </div>
  );
};

export default DemoModal;
