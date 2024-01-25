import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Requirements.module.scss";
import { motion } from "framer-motion";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Requirements = ({fn}) => {
  return (
    <section id="RequirementsSection" className={styles.RequirementsContainer}>
      <div className="container flex flex-col md:flex-row gap-8">      
            <div className={styles.imgRequirements}>
                <div className={styles.titleMob}>
                  <h2>Estos son los requisitos para <b>acceder al crédito:</b></h2>
                </div>
                <div className="w-[100vw] sm:w-[100vw] lg:w-[30vw] xl:w-[25vw] overflow-hidden">
                  <img src="/images/pedidos-ya-requisitos-mb.jpg" alt="pedidos ya requisitos" />
                </div>
            </div>
          
           <div className={styles.rightRequirements}> 
              <h2 className={styles.titleDesk}>Estos son algunos de los requisitos para <b>acceder al crédito:</b></h2>
              <div className={styles.RequirementsList}>
                <ItemBenefit
                  text={"Vender activamente durante más de 6 semanas consecutivos."}
                  img={"/icons/benefits/bullet.svg"}
                  imgAlt={"Icono sin burocracia"}
                />
                <ItemBenefit
                  text={"Alcanzar un buen desempeño comercial en PedidosYa."}
                  img={"/icons/benefits/bullet.svg"}
                  imgAlt={"Icono internacional"}
                />
                <ItemBenefit
                  text={"Tener cuenta bancaria validada."}
                  img={"/icons/benefits/bullet.svg"}
                  imgAlt={"Icono descuentos"}
                />       
              </div>
            </div>
      </div>

    </section>

  );
};

export default Requirements;
