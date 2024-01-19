import styles from "./PaymentSteps.module.scss";
import CardPaymentSteps from "../CardPaymentSteps/CardPaymentSteps";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PaymentSteps = () => {
  const container2 = useRef();
  const wrapcontainer = container2.current;


  useEffect(() => {
    if (container2.current) {

    const panels2 = gsap.utils.toArray('[data-element="elem2"]');

    let ctx2 = gsap.context(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: container2.current,
        start: "top +=50",
        end: "bottom",
        pin: true,
        smooth: 5,
        scrub: true,
        markers: false,
      },
    });

    panels2.forEach((panel, i) => {
      if (i === 0) return;
      tl2.fromTo(panel, {
        yPercent: 130, duration: i * 0.3, ease: "none", zIndex: "1"
      }, {yPercent: 0, zIndex: "1"});

    });      


    }, container2); 
    


    return () => ctx2.revert(); // cleanup! 
    
  }

  }, []);
  ScrollTrigger.refresh();

/*  ---------  */    
    

  return (    
    <section id="paymentSteps" ref={container2} className={styles.paymentStepsContainer}>

      <div className="container flex flex-col" >
              <h2>Paga las cuotas <b>con tus ventas</b></h2>
              <div className={styles.wrapCardsPaymentSteps}>
                   <div className={styles.cardWrap} data-element={"elem2"}>
                      <CardPaymentSteps 
                          img={"images/card1-1.png"}
                          text={"La cuota se descontará de la liquidación semanal de ventas."}
                      />
                    </div>
                    <div className={styles.cardWrap} data-element={"elem2"}>
                      <CardPaymentSteps 
                        img={"images/card1-2.png"}
                        text={"Si no se pudo cobrar el monto total de la cuota, se deducirá de la siguiente liquidación."}
                    />
                    </div>
                    <div className={styles.cardWrap} data-element={"elem2"}>
                      <CardPaymentSteps 
                        img={"images/card1-3.png"}
                        text={"Podrás seguir el progreso de las cuotas desde la sección Finanzas en Partner Portal."}
                    />  
                    </div>
              </div> 
          </div>
    </section>  
  );
};

export default PaymentSteps;