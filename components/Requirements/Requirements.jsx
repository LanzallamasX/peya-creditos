import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Requirements.module.scss";
import { motion } from "framer-motion";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Requirements = ({fn}) => {
  return (
    <section id="RequirementsSection" className={styles.RequirementsContainer}>
      <motion.div
        key={2}
        className={styles.rightRequirements}
        initial={{
          transform: "translateX(-100%)",
          opacity: 0,
        }}
        whileInView={{
          transform: "translateX(0%)",
          opacity: 1,
          transition: {
            duration: 1,
            type: "tween",
            damping: 25,
            stiffness: 500,
          },
        }}
        viewport={{ once: true }}
        exit={{
          transform: "translateX(0%)",
          opacity: 1,
        }}
      >
        <div className={styles.imgRequirements}>
          <div className={styles.imgGradient}></div>
          <div className={styles.titleMob}>
             <h2>Estos son los requisitos para <b>acceder al crédito:</b></h2>
          </div>
         <img src="/images/pedidos-ya-requisitos-mb.jpg" alt="pedidos ya requisitos" />
         </div>
      </motion.div>      
      <motion.div
        key={1}
        className={styles.rightRequirements}
        initial={{
          transform: "translateX(+100%)",
          opacity: 0,
        }}
        whileInView={{
          transform: "translateX(0%)",
          opacity: 1,
          transition: {
            duration: 1,
            type: "tween",
            damping: 25,
            stiffness: 500,
          },
        }}
        viewport={{ once: true }}
        exit={{
          transform: "translateX(0%)",
          opacity: 1,
        }}
      >
        <h2 className={styles.titleDesk}>Estos son los requisitos para <b>acceder al crédito:</b></h2>
        <div className={styles.RequirementsList}>
          <ItemBenefit
            text={"Vender activamente durante 2 meses consecutivos."}
            img={"/icons/benefits/bullet.svg"}
            imgAlt={"Icono sin burocracia"}
          />
          <ItemBenefit
            text={"Mantener un promedio de ventas estable."}
            img={"/icons/benefits/bullet.svg"}
            imgAlt={"Icono internacional"}
          />
          <ItemBenefit
            text={"Tener la cuenta bancaria validada."}
            img={"/icons/benefits/bullet.svg"}
            imgAlt={"Icono descuentos"}
          />       
        </div>
      </motion.div>

    </section>

  );
};

export default Requirements;
