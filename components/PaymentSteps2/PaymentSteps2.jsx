import { useRef, useEffect } from "react";
import styles from "./PaymentSteps2.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CardPaymentSteps from "../CardPaymentSteps/CardPaymentSteps";
import CardCreditRequest from "../CardCreditRequest/CardCreditRequest";


gsap.registerPlugin(ScrollTrigger);


const PaymentSteps2 = () => {
  const container2 = useRef();


  useEffect(() => {
    if (container2.current) {

    const panels2 = gsap.utils.toArray('[data-element="elem2"]');
    let ctx2 = gsap.context(() => {

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: container2.current,
        start: "top",
        end: "max",
        pin: true,
        smooth: 5,
        scrub: true,
        markers: false,
      },
    });


    panels2.forEach((panel, i) => {
      if (i === 0) return;
      tl2.fromTo(panel, {
        yPercent: 150, duration: i * 0.3, ease: "none"
      }, {yPercent: 0});

    });      


    }, container2); // <- scopes all selector text inside the context to this component (optional, default is document)
    
    ScrollTrigger.refresh();


    return () => ctx2.revert(); // cleanup! 
  }

  }, []);


  return (    
    <section id="creditRequest" ref={container2} className={styles.creditRequestContainer}>
      <div className="container flex flex-col gap-8 items-center">
            <h2>Solicitá tu Crédito en <b>3 pasos</b></h2>
            <p>Como ya te conocemos, no necesitás pasar por el proceso burocrático bancario tradicional.</p>

            <div className={styles.cards}>   
                    <div className={styles.cardWrap} data-element={"elem2"}>   
                    <CardCreditRequest 
                          number={"1"}
                          imgDesk={"images/steps/Paso-1_dk.jpg"}
                          imgMob={"images/steps/paso1.png"}
                          title={"Simulá tu crédito"}
                          text={"Elegí el monto a solicitar, en cuantas cuotas lo querés abonar y conocé el monto final."}
                          color={"cardBlue"}
                          lineColor={"lineWhite"}
                    />
                    </div>  
                    <div className={styles.cardWrap} data-element={"elem2"}>   
                      <CardCreditRequest
                                  number={"2"}
                                  imgDesk={"images/steps/Paso-2_dk.jpg"}
                                  imgMob={"images/steps/paso2.png"}
                                  title={"Confirmá tus datos"}
                                  text={"Para completar la solicitud y recibir información debés confirmar e-mail y un teléfono de contacto."}
                                  color={"cardGreen"}
                                  lineColor={"lineBlue"}
                            />   
                    </div>  

                    <div className={styles.cardWrap} data-element={"elem2"}>   
                      <CardCreditRequest
                                  number={"3"}
                                  imgDesk={"images/steps/Paso-3_dk.jpg"}
                                  imgMob={"images/steps/paso3.png"}
                                  title={"Aceptá T&C"}
                                  text={"heck de la declaración jurada y términos & condiciones."}
                                  color={"cardBlue"}
                                  lineColor={"lineWhite"}
                            />    
                    </div>  

                    <div className={styles.cardWrap} data-element={"elem2"}>   
                    <CardCreditRequest
                                  number={""}
                                  imgDesk={"images/steps/Paso-4_dk.jpg"}
                                  imgMob={"images/steps/paso4.png"}
                                  title={"¡Solicitud finalizada!"}
                                  text={"Tu dinero se acreditará en 48 horas hábiles."}
                                  color={"cardGreen"}
                                  endCardTitle="endCardTitle"
                                  endCardText="endCardText"
                                  
                            />   
                    </div>                    
            </div>

        </div>
    </section>  
  );
};

export default PaymentSteps2;