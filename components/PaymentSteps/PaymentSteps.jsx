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
 
  const container2 = useRef();

  useEffect(() => {
    // Verifica si container2 es válido antes de ejecutar el código
    if (container2.current) {
      const panels2 = gsap.utils.toArray('[data-element="elem2"]');
      let ctx2 = gsap.context(() => {
        // Crea la animación con GSAP y ScrollTrigger
        const tl2 = gsap.timeline({
          scrollTrigger: {
            scroller: container2.current,
            start: "top",
            end: "max",
            pin: true,
            smooth: 5,
            scrub: true,
            markers: true,
          },
        });
  
        // Aplica animación a cada panel
        panels2.forEach((panel, i) => {
          if (i === 0) return;
          tl2.fromTo(panel, {
            yPercent: 150, duration: i * 0.3, ease: "none"
          }, {yPercent: 0});
        });
        
      }, container2); // <- scopes all selector text inside the context to this component (optional, default is document)
  
      return () => ctx2.revert(); // cleanup!
    }
  }, []);  

  return (    
    <section id="paymentSteps" ref={container2}  className={styles.PaymentStepsContainer}>

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