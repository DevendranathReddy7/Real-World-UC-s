import React from "react";
import "./Modal.css";
const Modal = ({ isOpen, closeModal }) => {
  return (
    <div className="modal__container">
      <button onClick={closeModal}>&times;</button>
      <p>I am Modal</p>
      {isOpen && <div onClick={closeModal}> </div>}
    </div>
  );
};
export default Modal;
