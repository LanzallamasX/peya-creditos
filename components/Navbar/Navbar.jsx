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
              ? "/images/pedidos-ya-creditos-desk.png"
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
            <a href="#hero">Home</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#videoStorySection">Testimonios</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#benefitsSection">Características</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#usos">Cómo usarlo</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#RequirementsSection">requisitos</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#creditRequest">Cómo pedirlo</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#paymentSteps">Cómo pagarlo</a>
          </li>   
          <li onClick={hideNavMenu}>
            <a href="#testimonialsSection">Testimonios</a>
          </li>   
          <li onClick={hideNavMenu}>
            <a href="#faqs">Preguntas Frecuentes</a>
          </li>                                                  
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
