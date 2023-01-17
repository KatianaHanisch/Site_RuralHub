import React from "react";
import ProdutosCard from "../shared/ProdutosCard/ProdutosCard";
import "./Produtos.css";

const Produtos = () => {
  return (
    <div className="containerProdutos">
      <h1>Conheça alguns dos nosso produtos</h1>
      <div className="containerCardProdutos">
        <ProdutosCard
          iconeCard={import.meta.env.BASE_URL + "img/bzero.png"}
          tituloCard="BZero"
          textoCard="Controle seu rebanho, acompanhe suas receitas e despesas"
          link="http://bzerro.com.br/"
        ></ProdutosCard>
        <ProdutosCard
          iconeCard={import.meta.env.BASE_URL + "img/silo_vitual.png"}
          tituloCard="Silo Virtual"
          textoCard="Silo Virtual é uma forma de acompanhar o contrato do agricultor com seu armazém"
          link="https://silovirtual.com.br/"
        ></ProdutosCard>
        <ProdutosCard
          iconeCard={import.meta.env.BASE_URL + "img/emitir_dfe.png"}
          tituloCard="Emitir DFE"
          textoCard="Crie modelos de notas e realize suas emissões com poucos cliques."
          link="https://emitirdfe.com.br/"
        ></ProdutosCard>
      </div>
    </div>
  );
};
export default Produtos;
