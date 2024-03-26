import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./SuccessModal.css";

const SuccessModal = () => {
  return (
    <div className="success-modal">
      <FaCheckCircle />
      <p>Your Demo has been Booked !</p>
    </div>
  );
};

export default SuccessModal;
