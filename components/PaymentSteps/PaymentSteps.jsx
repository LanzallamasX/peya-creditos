import { useRef, useEffect } from "react";
import styles from "./PaymentSteps.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CardPaymentSteps from "../CardPaymentSteps/CardPaymentSteps";


gsap.registerPlugin(ScrollTrigger);


const PaymentSteps = () => {
  const containerPayments = useRef();

  const contanierPayments = containerPayments.current;
  
  const tl2 = useRef();

  useEffect(() => {
      const panelsAnim = gsap.utils.toArray('[data-element="elem2"]');   

      let ctx2 = gsap.context(() => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            scroller: contanierPayments,
            start: "bottom bottom-=100",
            end: "bottom top",
            pin: true,
            smooth: 5,
            scrub: true,
            markers: true,
          },
        });
  
        // Aplica animación a cada panel
        panelsAnim.forEach((panel, i) => {
          if (i === 0) return;
          tl2.fromTo(panel, {
            yPercent: 100, duration: i * 0.3, zIndex: 1, ease: "none"
          }, {yPercent: 0, zIndex: 3});
    
        });  

      }, containerPayments); 
      ScrollTrigger.refresh();

      return () => ctx2.revert(); 
    }, []);


/*  ---------  */    
    
  


  return (    
    <section id="paymentSteps"  className={styles.PaymentStepsContainer}>

      <div className="container flex flex-col " ref={containerPayments}>

              <h2>Paga las cuotas <b>con tus ventas</b></h2>
              <div className={`${styles.wrapCardsPaymentSteps} `}>
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

              <div className={`${styles.wrapSlider} ${styles.mobWrap}`}>
                          
              </div> 

          </div>
    </section>  
  );
};

export default PaymentSteps;