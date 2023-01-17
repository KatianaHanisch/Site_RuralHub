import { useState } from "react";
import Header from "./components/Header/Header";
import BtnWhastApp from "./components/shared/BtnWhastApp/BtnWhastApp";
import Inicio from "./components/Inicio/Inicio";
import RamosDeAtuacao from "./components/RamosDeAtuacao/RamosDeAtuacao";
import SaibaMais from "./components/SaibaMais/SaibaMais";
import Produtos from "./components/Produtos/Produtos";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Inicio />
      <BtnWhastApp />
      <RamosDeAtuacao />
      <SaibaMais />
      <Produtos />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
