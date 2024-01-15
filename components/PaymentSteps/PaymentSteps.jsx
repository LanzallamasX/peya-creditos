import { useRef, useEffect } from "react";
import styles from "./PaymentSteps.module.scss";

import { useLayoutEffect } from 'react';
import dynamic from 'next/dynamic';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainButton from "../MainButton/MainButton";
import CardPaymentSteps from "../CardPaymentSteps/CardPaymentSteps";

// Registra los plugins al importarlos
gsap.registerPlugin(ScrollTrigger);




const PaymentSteps = () => {
 

  return (    
    <section id="paymentSteps"  className={styles.PaymentStepsContainer}>

          <h2>Paga las cuotas <b>con tus ventas</b></h2>
          <div className={styles.wrapCardsPaymentSteps}>
            <CardPaymentSteps
                img={"images/card1-1.png"}
                text={"La cuota se descontará de la liquidación semanal de ventas."}
            />

              <CardPaymentSteps
                img={"images/card1-2.png"}
                text={"Si no se pudo cobrar el monto total de la cuota, se deducirá de la siguiente liquidación."}
            />

              <CardPaymentSteps
                img={"images/card1-3.png"}
                text={"Podrás seguir el progreso de las cuotas desde la sección Finanzas en Partner Portal."}
            />         
          </div> 
    </section>  
  );
};

/* imgDesk, imgMob, title, text, number  */

export default PaymentSteps;