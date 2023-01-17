import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="containerEndereco">
        <h1>Endereço</h1>
        <p>
          Rua das Primaveras, N° 1537 - Jardim Jacarandas CEP: 78557-730 - Sinop
          - MT
        </p>
        <p>Seg à Sex, 7:30 - 17:30/ Sab, 7:30 - 11:30</p>
      </div>
      <div className="containerRedesSociais">
        <a href="malito:comercial@brst.com.br" className="btnRedeSocial">
          <div className="icon iconEmail">
            <MdOutlineEmail size={30} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/ruralhubsinop/"
          target="_blank"
          className="btnRedeSocial"
        >
          <div className="icon iconInstagram">
            <FaInstagram size={30} />
          </div>
        </a>
        <a
          href="https://www.facebook.com/BrasilSistemas/?fref=ts"
          target="_blank"
          className="btnRedeSocial"
        >
          <div className="icon iconFacebook">
            <FaFacebook size={30} />
          </div>
        </a>
      </div>
      <p className="footer">&copy; 2022 RuralHub</p>
    </div>
  );
};

export default Footer;
