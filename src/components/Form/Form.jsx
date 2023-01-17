import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="containerForm">
      <form action="">
        <div className="textoContainer">
          <h1>Contato</h1>
          <p>Deixe sua mensagem que entramos em contato com você.</p>
        </div>
        <label htmlFor="nome">Nome </label>
        <input type="text" name="nome" placeholder="Digite seu nome" />
        <label htmlFor="empresa">Empresa </label>
        <input
          type="text"
          name="empresa"
          placeholder="Digite o nome da sua empresa"
        />
        <label htmlFor="email">Email </label>
        <input type="text" name="email" placeholder="Digite seu email" />
        <label>Mensagem</label>
        <textarea
          name="mensagem"
          id=""
          cols="80"
          rows="4"
          placeholder="Digite sua mensagem"
        ></textarea>
        <div className="containerButton">
          <button className="btnEnviar">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
