import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

import "./ProdutosCard.css";

const ProdutosCard = (props) => {
  return (
    <div className="containerProdutosCard">
      <div className="containerIconeProduto">
        <img src={props.iconeCard} alt="" />
      </div>
      <div className="containerTextoProduto">
        <h3>{props.tituloCard}</h3>
        <p>{props.textoCard}</p>
      </div>
      <button className="btnCard">
        <a target="_blank" href={props.link}>
          {" "}
          Saiba Mais
        </a>
        <BiRightArrowAlt size={24} />
      </button>
    </div>
  );
};
export default ProdutosCard;
