import React from "react";
import Card from "../shared/Card/Card";

import "./RamosDeAtuacao.css";

import img1 from "../../assets/img/silo.png";
import img2 from "../../assets/img/silo_vitual.png";

import img3 from "../../assets/img/agricultor.png";
import img4 from "../../assets/img/safra.png";

import img5 from "../../assets/img/comercializacao.png";
import img6 from "../../assets/img/corretora.png";

import img7 from "../../assets/img/troca.png";
import img8 from "../../assets/img/finanças.png";

import img9 from "../../assets/img/industria.png";
import img10 from "../../assets/img/logistica.png";

import img11 from "../../assets/img/transportes.png";

const RamosDeAtuacao = () => {
  return (
    <div className="containerRamos" id="section">
      <div className="containerTitulo">
        <h1>Ramos de Atuação</h1>
        <p>
          A solução ideal para o seu negócio, com uma gestão de informação
          abrangente e eficiente, integrando todos os departamentos da sua
          empresa por módulo.
        </p>
      </div>

      <div className="containerCards">
        <Card
          imagemCard={img1}
          tituloCard="Silos e Armazéns de Grãos"
          titulo="Silo Virtual"
          descricao="Com esse sistema você tem o controle de todas as etapas de
          armazenagem do produto contratado, com indicadores e painéis de
          avisos em tempo real sobre entradas e saídas."
          iconeCard={img2}
          modal={img2}
        ></Card>
        <Card
          imagemCard={img3}
          tituloCard="Fazendas e Produtores Rurais"
          titulo="BR Safra"
          descricao="Controle geral da produção de grãos, com apresentação de resultados precisos para otimizar a produtividade e maximizar o lucro de sua propriedade rural."
          modal={img4}
        ></Card>
        <Card
          imagemCard={img5}
          tituloCard="Comercialização de Cereais"
          titulo="BR Corretora"
          descricao="Gestão completa das operações de corretagem de grãos, contando com contratos de compra, venda, ordem de embarque e controle do estoque físico fiscal."
          modal={img6}
        ></Card>
        <Card
          imagemCard={img7}
          tituloCard="Revenda de Produtos"
          titulo="BR Finanças"
          descricao="Tenha em mãos o controle total do financeiro da sua empresa, de forma clara e objetiva para otimização de processos e alocação de recursos com precisão."
          modal={img8}
        ></Card>
        <Card
          imagemCard={img9}
          tituloCard="Indústrias"
          titulo="BR Finanças"
          descricao="Tenha em mãos o controle total do financeiro da sua empresa, de forma clara e objetiva para otimização de processos e alocação de recursos com precisão."
          modal={img8}
        ></Card>
        <Card
          imagemCard={img10}
          tituloCard="Logística"
          titulo="BR Transporte"
          descricao="Demonstrativos de viagens, controle de receitas e despesas de frota, com suporte completo para os processos da empresa."
          modal={img11}
        ></Card>
      </div>
    </div>
  );
};

export default RamosDeAtuacao;
