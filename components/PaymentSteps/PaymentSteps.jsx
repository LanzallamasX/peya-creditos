import { useRef, useEffect } from "react";
import styles from "./PaymentSteps.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CardPaymentSteps from "../CardPaymentSteps/CardPaymentSteps";

import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

// Registra los plugins al importarlos
gsap.registerPlugin(ScrollTrigger);


const PaymentSteps = () => {
 
  const container2 = useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();

  useEffect(() => {
    if (container2.current) {

    // Verifica si container2 es válido antes de ejecutar el código
      const panels2 = [card1Ref.current, card2Ref.current, card3Ref.current];
      const panelsAnim = gsap.utils.toArray('[data-element="elem2"]');

   //   gsap.fromTo(panels2, {y: 500}, {duration: 5, y: 0, stagger: 0.5, ease: "power3.out"}, 2)

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
        panelsAnim.forEach((panel, i) => {
          if (i === 0) return;
          tl2.fromTo(panel, {
            yPercent: 50, duration: i * 0.3, ease: "none"
          }, {yPercent: 0});
    
        });  


        ScrollTrigger.refresh();

      }, container2); 
  
      return () => ctx2.revert(); 
    }
    }, [container2, card1Ref, card2Ref, card3Ref]);

    

  return (    
    <section id="paymentSteps" ref={container2}  className={styles.PaymentStepsContainer}>

      <div className="container flex flex-col ">

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


{/*
              <SliderComponent amount={1} paginationBoolean={false} loopBoolean={false} >
                      <SwiperSlide>
                          <CardPaymentSteps 
                              img={"images/card1-1.png"}
                              text={"La cuota se descontará de la liquidación semanal de ventas."}
                          />        
                      </SwiperSlide>  
                      <SwiperSlide>
                          <CardPaymentSteps 
                            img={"images/card1-2.png"}
                            text={"Si no se pudo cobrar el monto total de la cuota, se deducirá de la siguiente liquidación."}
                        />      
                      </SwiperSlide>  
                      <SwiperSlide>
                          <CardPaymentSteps 
                            img={"images/card1-3.png"}
                            text={"Podrás seguir el progreso de las cuotas desde la sección Finanzas en Partner Portal."}
                        />     
                      </SwiperSlide>                                         
                  </SliderComponent>  

*/}
                      
    
              </div> 

          </div>
    </section>  
  );
};

/* imgDesk, imgMob, title, text, number  */

export default PaymentSteps;