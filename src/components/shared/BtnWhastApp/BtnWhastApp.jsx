import React from "react";
import "./BtnWhastApp.css";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/556699984060?text=Olá"
        class="whatsapp_float"
        target="_blank"
        body="hello world"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
