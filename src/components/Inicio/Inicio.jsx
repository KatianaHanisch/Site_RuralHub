import React from "react";

import "./Inicio.css";

import arrow from "../../assets/img/arrowDown.gif";
import logo from "../../assets/img/argon-react-white.png";

const Inicio = () => {
  return (
    <div className="imagemInicio">
      <div className="containerTextos">
        <div className="containerLogoInicio">
          <img src={logo} alt="imagem da logo" />
        </div>
        <div>
          <h1>Sistemas Personalizados</h1>
          <p>Atuamos em diferentes segmentos com diversas ferramentas</p>
          <p>garantindo eficiência e rentabilidade</p>
        </div>
        <div className="container">
          <a href="#section">
            <img src={arrow} alt="arrowDown" className="arrowDown" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
