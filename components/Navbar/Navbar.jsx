import $ from "jquery";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";
import styles from "./Navbar.module.scss";

const Navbar = ({ fn }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const hideNavMenu = () => {
    $("#hideMenuContainer").slideToggle();
  };

  useEffect(() => {
    $("#hideMenuButton").on("click", () => {
      $("#hideMenuContainer").slideToggle().css({
        display: "flex",
      });
    });
  }, []);

  return (
    <nav id="nav" className={styles.navbar}>
      <a href="#hero">
        <img
          src={
            windowWidth > 500
              ? "/images/pedidos-ya-creditos.png"
              : "/images/pedidos-ya-creditos.png"
          }
          alt="Ir al inicio"
        />
      </a>

      <button id="hideMenuButton" className={styles.menuNavbar}>
        <AiOutlineMenu color="#004ADD" size={40} />
      </button>
      <div id="hideMenuContainer" className={styles.hiddenMenuContainer}>
        <ul className={styles.hiddenLinksContainerList}>
          <li onClick={hideNavMenu}>
            <a href="#cashbackSection">Home</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#benefitsSection">Historias</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#secureCardSection">Valor extendido</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">usos</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">requisitos</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">pasos</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">como pagar</a>
          </li>   
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">testimonios</a>
          </li>   
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">preguntas frecuentes</a>
          </li>                                                  
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
