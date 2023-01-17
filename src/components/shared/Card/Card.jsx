import React, { useState } from "react";
import Modal from "../../Modal/Modal";

import "./Card.css";

const Card = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="containerCard">
      <div className="containerImgCards">
        <a
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img src={props.imagemCard} alt="" />
        </a>
        {openModal && (
          <Modal
            closeModal={setOpenModal}
            titulo={props.titulo}
            descricao={props.descricao}
            modal={props.modal}
          />
        )}
      </div>
      <h3>{props.tituloCard}</h3>
    </div>
  );
};
export default Card;
