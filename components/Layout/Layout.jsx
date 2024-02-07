import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import dynamic from "next/dynamic";
const DynamicGoToTop = dynamic(() => import("../GoToTop/GoToTop"), {
  ssr: false,
});

const Layout = ({
  children,
  title = "PedidosYa Créditos - Simulá tu crédito ya",
  desc = "100% digital, simple y seguro",
  fn,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content="pedidosya créditos, créditos pedidosya, préstamos pedidosya, pedidosya préstamos, simulador prestamo, simulador creditos, creditos personales, creditos online, creditos, simulador de creditos, créditos online, pedir prestamo, prestamo facil y rapido, prestamo facil, prestamo facil y rapido online, PedidosYa, Visa, Visa Crédito, Crédito, pedidosya, pedidos, rápido, compra, tarjeta, visa, crédito, beneficios, compras, descuentos, cashback, pedidos, digital, app, precio, precios, financiamiento, supermercados, restaurantes" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header fn={fn} />
      {children}
      <DynamicGoToTop />
      <Footer />
    </>
  );
};

export default Layout;
