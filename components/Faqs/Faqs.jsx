import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import styles from "./Faqs.module.scss";


const Faqs = ({}) => {

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-bold",
    content: "text-small px-2",
  };


  return (
    <section id="faqs" className={styles.faqsContainer}>
      <div className="container">
      <h2>Preguntas frecuentes</h2>

        <Accordion className={styles.wrapFaqs}  
                      motionProps={{
                        variants: {
                          enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                              height: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                              },
                              opacity: {
                                easings: "ease",
                                duration: 1,
                              },
                            },
                          },
                          exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                              height: {
                                easings: "ease",
                                duration: 0.25,
                              },
                              opacity: {
                                easings: "ease",
                                duration: 0.3,
                              },
                            },
                          },
                        },
                      }}
      >
          <AccordionItem className={styles.button}
                      key="1"
                      aria-label="Accordion 1"
                      title={<div><span className={styles.colorList}>1</span> ¿Cómo puedo obtener una oferta de PedidosYa Créditos?</div>}                                            
          >
                      <div>
                      <p> 	
                      Si ya estás vendiendo con tu local desde la aplicación PedidosYa, podrás acceder a un crédito cuando cumplas con los siguientes objetivos:<br/>

                      - <strong>Vender</strong> activamente <strong>durante más de 6 semanas</strong> consecutivas.<br/>
                      -<strong> Mantener un promedio de ventas semanales mayor a MonedadeMercado MontoVariablePorMercado</strong>.<br/>
                      - Tener la <strong>cuenta bancaria validada</strong>.<br/>
                      - Alcanzar un <strong>buen desempeño comercial</strong> en PedidosYa.<br/>

                      Podés revisar si cumplís con todos los objetivos en la solapa Créditos de la Sección Finanzas.<br/>

                      Si terminás de pagar tu crédito y seguís vendiendo activamente, podrás acceder a un nuevo crédito.
                      </p>
                      </div>
          </AccordionItem>
          <AccordionItem className={styles.button}
                      key="2"
                      ria-label="Accordion"
                      title={<div><span className={styles.colorList}>2</span> ¿Cómo es el crédito que puedo solicitar?</div>}                                            
          >
                      <div>
                      <p>Podés solicitar un crédito de PedidosYa <strong> desde el lugar en el que te encuentres. Recibirás el dinero en tu cuenta bancaria en un máximo de 48 horas hábiles</strong> posteriores a la solicitud del crédito.<br />

                      <strong> La solicitud es segura, online y fácil</strong>, conoce más detalles en los <a href="https://creditos.pedidosya.com/terminos-y-condiciones" title="Términos y condiciones de PedidosYA Créditos" target="_blank"><strong>Términos y condiciones</strong></a> de PedidosYa Créditos.
                      
                        </p>
                      </div> 
          </AccordionItem>
          <AccordionItem className={styles.button}
                      key="3"
                      ria-label="Accordion"
                      title={<div><span className={styles.colorList}>2</span> ¿Dónde recibo el dinero?</div>}                                            
          >
                      <div>
                        <p>
                        El dinero <strong> recibirás en la cuenta bancaria asociada a tu contrato con PedidosYa.</strong> La misma en la que recibes la liquidación por tus ventas semanales.                      
                        </p>
                      </div> 
          </AccordionItem> 

          <AccordionItem className={styles.button}
                      key="4"
                      ria-label="Accordion"
                      title={<div><span className={styles.colorList}>2</span>¿Cómo y cuándo pago las cuotas?</div>}                                            
          >
                      <div>
                        <p>
                          Las cuotas<strong> se descontarán automáticamente de la liquidación de ventas</strong>. Podrás visualizarlo en el resumen del Estado de Cuenta y en la solapa Créditos de la sección Finanzas en Partner Portal. <br />

                          Las cuotas<strong> serán consideradas como pagas cuando se realice el cobro total</strong>. Si en la liquidación semanal de ventas no se pudo realizar el cobro total de la cuota,<strong> se descontará de la siguiente liquidación hasta alcanzar el monto total a cobrar</strong>.<br />
                          
                          Y<strong> si quieres completar el pago de la cuota antes del cierre de la siguiente liquidación, podrás realizar una transferencia bancaria</strong> a la cuenta indicada en la solapa Créditos, dentro de la sección Finanzas en Partner Portal.
                        </p>
                      </div> 
          </AccordionItem>           

        </Accordion>
        </div>
    </section>
  );
};

export default Faqs;
