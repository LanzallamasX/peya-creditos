import ItemBenefit from "../ItemBenefit/ItemBenefit";
import MainButton from "../MainButton/MainButton";
import styles from "./Benefits.module.scss";
import { motion } from "framer-motion";

const Benefits = ({fn}) => {
  return (
    <section id="benefitsSection" className={styles.benefitsContainer}>
      <div className="container flex flex-col md:flex-row gap-8">
          <motion.div
            key={2}
            className={styles.rightBenefits}
            initial={{
              opacity: 0,
            }}
            whileInView={{
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
              opacity: 1,
            }}
          >
            <div className={styles.imgBenefits}>
            <img src="/images/benefitsImg.svg" alt="Mujer con tarjeta virtual" />
            </div>
          </motion.div>      
          <motion.div
            key={1}
            className={styles.rightBenefits}
            initial={{
              transform: "translateY(+10%)",
              opacity: 0,
            }}
            whileInView={{
              transform: "translateY(0%)",
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
            <h2>El mejor crédito, porque <b>tu negocio</b> se lo merece</h2>
            <div className={styles.benefitsList}>
              <ItemBenefit
                text={"Pídelo online, sin papeles."}
                img={"/icons/benefits/bullet.svg"}
                imgAlt={"Icono sin burocracia"}
              />
              <ItemBenefit
                text={"Elige monto y cuotas."}
                img={"/icons/benefits/bullet.svg"}
                imgAlt={"Icono internacional"}
              />
              <ItemBenefit
                text={"Recíbelo en menos de 48hs hábiles."}
                img={"/icons/benefits/bullet.svg"}
                imgAlt={"Icono descuentos"}
              />
              <ItemBenefit
                text={"Las cuotas se debitan automáticamente de tus ventas."}
                img={"/icons/benefits/bullet.svg"}
                imgAlt={"Icono descuentos"}
              />  
                <div className={styles.wrapMainBtn}>
                  <MainButton                  
                  color="buttonRed"
                />        
              </div>
            </div>
          </motion.div>
      </div>
    </section>
    
  );
};

export default Benefits;
