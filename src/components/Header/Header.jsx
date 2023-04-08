import React from "react";
import "./Header.css";

import logo from "../../assets/img/blue.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <ul>
          <li>
            <a href="#">
              <img src={logo} alt="logo da empresa" />
            </a>
          </li>
          <li className="btn">
            <a href="#">Área do Cliente</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
