import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import SearchBar from "./componentes-header/SearchBar"; // Ajuste o caminho conforme necessário
import HamburgerMenu from "./componentes-header/HamburguerMenu"; // Ajuste o caminho conforme necessário
import logo from "/src/assets/logo-kabum-header.svg";

function Header() {
  return (
    <header className="bg-black h-26 p-3 sm:h-28">
      <div className="sm:flex">
        <div className="flex">
          <div className="sm:ml-12 mt-3 mr-8">
            <HamburgerMenu />
          </div>
          <div className="ml-[25%] sm:ml-0 mt-2 mr-8">
            <img src={logo} className="h-12 sm:h-16"></img>
          </div>
        </div>
        <div className="mt-3">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
export default Header;
