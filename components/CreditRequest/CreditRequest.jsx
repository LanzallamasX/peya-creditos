import styles from "./CreditRequest.module.scss";
import MainButton from "../MainButton/MainButton";
import CardCreditRequest from "../CardCreditRequest/CardCreditRequest";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreditRequest = ({ lng }) => {
  const container = useRef();
  const wrapcontainer = container.current;


  useEffect(() => {
    if (container.current) {

    const panels = gsap.utils.toArray('[data-element="elem1"]');

    let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top",
        end: "bottom",
        pin: true,
        smooth: 5,
        scrub: true,
        markers: false,
      },
    });


    panels.forEach((panel, i) => {
      if (i === 0) return;
      tl.fromTo(panel, {
        yPercent: 130, duration: i * 0.3, ease: "none"
      }, {yPercent: 0});

    });      


    }, container); 
    
    return () => ctx.revert(); // cleanup! 
  }

  }, []);

  ScrollTrigger.refresh();


  return (    
    <section id="creditRequest" ref={container} className={styles.creditRequestContainer}>
      <div className="container flex flex-col gap-8 items-center">
            <h2>{`${lng === 'AR' ? 'Solicitá' : 'Solicita'}`} tu Crédito en <b>3 pasos</b></h2>
            <p>{`Como ya te conocemos, no ${lng === 'AR' ? 'necesitás' : 'necesitas'} pasar por el proceso burocrático bancario tradicional.`}</p>

            <div className={styles.cards}>   
                    <div className={styles.cardWrap} data-element={"elem1"}>   
                    <CardCreditRequest 
                          number={"1"}
                          imgDesk={`images/steps/Paso-1_dk${lng === 'AR' ? '' : '-neutro'}.jpg`}
                          imgMob={`images/steps/paso1${lng === 'AR' ? '' : '-neutro'}.png`}
                          title={`${lng === 'AR' ? 'Simulá' : 'Simula'} tu crédito`}
                          text={`${lng === 'AR' ? 'Elegí' : 'Elige'} el monto a solicitar, en cuantas cuotas lo ${lng === 'AR' ? 'querés' : 'quieres'} abonar y ${lng === 'AR' ? 'conocé' : 'conoce'} el monto final.`}
                          color={"cardBlue"}
                          lineColor={"lineWhite"}
                    />
                    </div>  
                    <div className={styles.cardWrap} data-element={"elem1"}>   
                      <CardCreditRequest
                                  number={"2"}
                                  imgDesk={`images/steps/Paso-2_dk${lng === 'AR' ? '' : '-neutro'}.jpg`}
                                  imgMob={`images/steps/paso2${lng === 'AR' ? '' : '-neutro'}.png`}
                                  title={`${lng === 'AR' ? 'Confirmá' : 'Confirma'} tus datos`}
                                  text={`Para completar la solicitud y recibir información ${lng === 'AR' ? 'debés' : 'debes'} confirmar e-mail y un teléfono de contacto.`}
                                  color={"cardGreen"}
                                  lineColor={"lineBlue"}
                            />   
                    </div>  

                    <div className={styles.cardWrap} data-element={"elem1"}>   
                      <CardCreditRequest
                                  number={"3"}
                                  imgDesk={`images/steps/Paso-3_dk${lng === 'AR' ? '' : '-neutro'}.jpg`}
                                  imgMob={`images/steps/paso3${lng === 'AR' ? '' : '-neutro'}.png`}
                                  title={`${lng === 'AR' ? 'Aceptá' : 'Acepta'} T&C`}
                                  text={"Check de la declaración jurada y términos & condiciones."}
                                  color={"cardBlue"}
                                  lineColor={"lineWhite"}
                            />    
                    </div>  

                    <div className={styles.cardWrap} data-element={"elem1"}>   
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

            <MainButton                  
                  color="buttonRed"
                  text={'Simular crédito'}
                  eventClick={"credit_selection.proceeded"}
                  userid={'User ?'}
                  bannerNumber={'3'} 
            />
        

        </div>
    </section>  
  );
};


export default CreditRequest;
