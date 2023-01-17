import React from "react";
import "./Modal.css";

const Modal = ({ closeModal, descricao, titulo, modal }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="titleCloseBtn">
          <div className="imgLogo">
            <img
              src={import.meta.env.BASE_URL + "img/argon-react.png"}
              alt="Logo da empresa"
            />
          </div>
          <button onClick={() => closeModal(false)} className="closeBtn">
            X
          </button>
        </div>
        <div className="title">
          <div className="imgInicio">
            <img src={modal} alt="" />
          </div>
          <h1>{titulo}</h1>
        </div>
        <div className="body">
          <p>{descricao}</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
