import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <ul>
          <li>
            <a href="#">
              <img
                src={import.meta.env.BASE_URL + "/img/blue.png"}
                alt="logo da empresa"
              />
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
