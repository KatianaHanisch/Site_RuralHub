import React from "react";
import Card from "../shared/Card/Card";

import "./RamosDeAtuacao.css";

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
          imagemCard={import.meta.env.BASE_URL + "img/silo.png"}
          tituloCard="Silos e Armazéns de Grãos"
          titulo="Silo Virtual"
          descricao="Com esse sistema você tem o controle de todas as etapas de
          armazenagem do produto contratado, com indicadores e painéis de
          avisos em tempo real sobre entradas e saídas."
          iconeCard={import.meta.env.BASE_URL + "img/silo_vitual.png"}
          modal={import.meta.env.BASE_URL + "img/silo_vitual.png"}
        ></Card>
        <Card
          imagemCard={import.meta.env.BASE_URL + "img/agricultor.png"}
          tituloCard="Fazendas e Produtores Rurais"
          titulo="BR Safra"
          descricao="Controle geral da produção de grãos, com apresentação de resultados precisos para otimizar a produtividade e maximizar o lucro de sua propriedade rural."
          modal={import.meta.env.BASE_URL + "img/safra.png"}
        ></Card>
        <Card
          imagemCard={import.meta.env.BASE_URL + "img/comercializacao.png"}
          tituloCard="Comercialização de Cereais"
          titulo="BR Corretora"
          descricao="Gestão completa das operações de corretagem de grãos, contando com contratos de compra, venda, ordem de embarque e controle do estoque físico fiscal."
          modal={import.meta.env.BASE_URL + "img/corretora.png"}
        ></Card>
        <Card
          imagemCard={import.meta.env.BASE_URL + "img/troca.png"}
          tituloCard="Revenda de Produtos"
          titulo="BR Finanças"
          descricao="Tenha em mãos o controle total do financeiro da sua empresa, de forma clara e objetiva para otimização de processos e alocação de recursos com precisão."
          modal={import.meta.env.BASE_URL + "img/finanças.png"}
        ></Card>
        <Card
          imagemCard={import.meta.env.BASE_URL + "img/industria.png"}
          tituloCard="Indústrias"
          titulo="BR Finanças"
          descricao="Tenha em mãos o controle total do financeiro da sua empresa, de forma clara e objetiva para otimização de processos e alocação de recursos com precisão."
          modal={import.meta.env.BASE_URL + "img/finanças.png"}
        ></Card>
        <Card
          imagemCard={import.meta.env.BASE_URL + "img/logistica.png"}
          tituloCard="Logística"
          titulo="BR Transporte"
          descricao="Demonstrativos de viagens, controle de receitas e despesas de frota, com suporte completo para os processos da empresa."
          modal={import.meta.env.BASE_URL + "img/transportes.png"}
        ></Card>
      </div>
    </div>
  );
};

export default RamosDeAtuacao;
