import React from "react";

import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="imagemInicio">
      <div className="containerTextos">
        <div className="containerLogoInicio">
          <img
            src={import.meta.env.BASE_URL + "img/argon-react-white.png"}
            alt="imagem da logo"
          />
        </div>
        <div>
          <h1>Sistemas Personalizados</h1>
          <p>Atuamos em diferentes segmentos com diversas ferramentas</p>
          <p>garantindo eficiência e rentabilidade</p>
        </div>
        <div className="container">
          <a href="#section">
            <img
              src={import.meta.env.BASE_URL + "img/arrowDown.gif"}
              alt="arrowDown"
              class="arrowDown"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
