import React from "react";
import './Modal.css'

function Modal({ setIsOpen }) {
  return (
    <>
      <div
        onClick={() => {
          setIsOpen(false);
          <div className="modal">
            <h3>Test Modal</h3>
            <button onClick={setIsOpen(false)}>Close</button>
            <div>
              <p>This is a simple Modal</p>
            </div>
          </div>;
        }}
      >
        Modal
      </div>
    </>
  );
}


export default Modal;
