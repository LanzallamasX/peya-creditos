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
      <div className={styles.linksContainer}>
        <ul className={styles.linksContainerList}>
          <li>
            <a href="#faqs">Ayuda</a>
          </li>
        </ul>
          <MainButton eventClick={"landing_option.clicked"} userid={'User ?'} bannerNumber={'0'} 
            text={'Simular crédito'}
            />
      </div>

      {/*}
      <button id="hideMenuButton" className={styles.menuNavbar}>
        <AiOutlineMenu color="#ffffff" size={40} />
      </button>
      <div id="hideMenuContainer" className={styles.hiddenMenuContainer}>
        <ul className={styles.hiddenLinksContainerList}>
          <li onClick={hideNavMenu}>
            <a href="#cashbackSection">Cashback</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#benefitsSection">Beneficios</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#secureCardSection">Tarjeta</a>
          </li>
          <li onClick={hideNavMenu}>
            <a href="#pricesSection">Costos</a>
          </li>
        </ul>
        <MainButton
          href={
            "https://pwdh.adj.st/fintech/cards/redirector?adj_t=6t2xp9f_a7g3qbs&adj_deep_link=pedidosya%3A%2F%2Ffintech%2Fcards%2Fredirector&adj_campaign=Landing&adj_adgroup=CTA&adj_creative=Header"
          }
          color="navbar"
        />
      </div>

      */}
    </nav>
  );
};

export default Navbar;
