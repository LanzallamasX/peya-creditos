import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapLogo}>
      <a href="#hero">
        <img className={styles.logo} src="/images/pedidosya.svg" alt="Logo PedidosYa Pagos" />
      </a>
      <p className={styles.disclaimer}>Pedidos Ya © 2010 - 2024</p>

      </div>
      <div className={styles.wrapTyC}>
        <ul className={styles.inlineList}>
          <li>
            <a target="_blank" href="https://creditos.pedidosya.com/terminos-y-condiciones">
              Términos y condiciones
            </a>
          </li>
          <li>
            <Link href="https://creditos.pedidosya.com/politica-de-privacidad">
            Politica de privacidad
            </Link>
          </li>          
        </ul>
      </div>

      {/*
      <div className={styles.rightFooterContainer}>
        <div className={styles.storeLinks}>
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.pedidosya&hl=es&referrer=pycat=retention&utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
          >
            <img src="/images/footerAndroid.svg" alt="Descargar App Android" />
          </Link>
          <Link
            href={
              "https://itunes.apple.com/app/pedidosya/id490099807?utm_medium=landing&utm_source=peya&utm_campaign=issuing&utm_content=download"
            }
          >
            <img src="/images/footerApple.svg" alt="Descargar App Apple" />
          </Link>
        </div>
      </div>
      */}
    </footer>
  );
};

export default Footer;
