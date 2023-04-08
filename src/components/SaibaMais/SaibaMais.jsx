import React from "react";
import { FaCheck } from "react-icons/fa";

import img from "../../assets/img/img_bg.jpg";

import "./SaibaMais.css";

const SaibaMais = () => {
  return (
    <div className="containerSaibaMais">
      <div className="containerInicio">
        <h2 className="tituloInformacoes">Tenha uma gestão mais eficiente</h2>
        <p>
          Pensando no melhor para criamos diversas ferramentas para lhe auxiliar
          para a gestão mais eficiente do seu negócio
        </p>
      </div>
      <div className="containerInformacoes">
        <div className="colunaRight">
          <div className="primeiroTextoInformacao itemSaibaMais">
            <h3>
              <div className="containerIcone">
                <FaCheck size={28} />
              </div>
              Você Produtor Rural que deseja emitir nota fiscal
            </h3>
            <p>Temos uma plataforma de emissões de notas fiscais</p>
          </div>
          <div className="segundoTextoInformacao itemSaibaMais">
            <h3>
              <div className="containerIcone">
                <FaCheck size={28} />
              </div>
              Para você transportadora, temos integração com CIOT
            </h3>
            <p>Gere suas cobranças de CIOT diretamente por nosso sistema</p>
          </div>
          <div className="terceiroTextoInformacao itemSaibaMais">
            <h3>
              <div className="containerIcone">
                <FaCheck size={28} />
              </div>
              Temos parceria com o Portal Onvio
            </h3>
            <p>Suas notas estarão em sincronia com a sua contabilidade</p>
          </div>
          <div className="segundoTextoInformacao itemSaibaMais">
            <h3>
              <div className="containerIcone">
                <FaCheck size={28} />
              </div>
              Buscando sempre facilitar seu dia a dia
            </h3>
            <p>Sistemas práticos, fáceis e que vão otimizar a sua vida</p>
          </div>
        </div>
        <div className="colunaLeft">
          <div className="informacoesImg">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais;
