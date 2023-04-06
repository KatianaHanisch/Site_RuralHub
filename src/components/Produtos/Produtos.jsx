import React from "react";
import ProdutosCard from "../shared/ProdutosCard/ProdutosCard";
import "./Produtos.css";

import img1 from "../../assets/img/bzero.png";
import img2 from "../../assets/img/silo_vitual.png";
import img3 from "../../assets/img/emitir_dfe.png";

const Produtos = () => {
  return (
    <div className="containerProdutos">
      <h1>Conheça alguns dos nosso produtos</h1>
      <div className="containerCardProdutos">
        <ProdutosCard
          iconeCard={img1}
          tituloCard="BZero"
          textoCard="Controle seu rebanho, acompanhe suas receitas e despesas"
          link="http://bzerro.com.br/"
        ></ProdutosCard>
        <ProdutosCard
          iconeCard={img2}
          tituloCard="Silo Virtual"
          textoCard="Silo Virtual é uma forma de acompanhar o contrato do agricultor com seu armazém"
          link="https://silovirtual.com.br/"
        ></ProdutosCard>
        <ProdutosCard
          iconeCard={img3}
          textoCard="Crie modelos de notas e realize suas emissões com poucos cliques."
          link="https://emitirdfe.com.br/"
        ></ProdutosCard>
      </div>
    </div>
  );
};
export default Produtos;
