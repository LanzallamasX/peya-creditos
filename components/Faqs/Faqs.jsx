import React from "react";
import styles from "./Faqs.module.scss";

import AccordionComponent from "../AccordionComponent/AccordionComponent";

const Faqs = ({}) => {

  

  const faqData = [
    {
      key: "1",
      question: "¿Cómo puedo obtener una oferta de PedidosYa Créditos?",
      content:
        `
        Si ya estás vendiendo con tu local desde la aplicación PedidosYa, podrás acceder a un crédito cuando cumplas con los siguientes objetivos:<br/>

                      - <strong>Vender</strong> activamente <strong>durante más de 6 semanas</strong> consecutivas.<br/>
                      -Alcanzar un buen <strong>desempeño comercial</strong> en PedidosYa.<br/>
                      - Tener la <strong>cuenta bancaria validada</strong>.<br/>

                      Si terminás de pagar tu crédito y seguís vendiendo activamente, podrás acceder a un nuevo crédito.
        `,
        event: 'credit_more_info.clicked',
        faqUser: 'userid',
        questionClicked: 'Como puedo obtener una oferta de PedidosYa Creditos',
        questionEvent: 'isOnline',

    },
    {
      key: "2",
      question: "¿Cómo es el crédito que puedo solicitar?",
      content:
        `Podés solicitar un crédito de PedidosYa <strong> desde el lugar en el que te encuentres. Recibirás el dinero en tu cuenta bancaria en un máximo de 48 horas hábiles</strong> posteriores a la solicitud del crédito.<br />
        <strong> La solicitud es segura, online y fácil</strong>, conoce más detalles en los <a href="https://creditos.pedidosya.com/terminos-y-condiciones" title="Términos y condiciones de PedidosYA Créditos" target="_blank"><strong>Términos y condiciones</strong></a> de PedidosYa Créditos.`,
        event: 'credit_more_info.clicked',
        faqUser: 'userid',
        questionClicked: 'Como es el credito que puedo solicitar',
        questionEvent: 'fixedInstallment',

    },
    {
      key: "3",
      question: "¿Dónde recibo el dinero?",
      content:
        `El dinero <strong> recibirás en la cuenta bancaria asociada a tu contrato con PedidosYa.</strong> La misma en la que recibes la liquidación por tus ventas semanales.`,
        event: 'credit_more_info.clicked',
        faqUser: 'userid',
        questionClicked: 'Donde recibo el dinero',
        questionEvent: 'moneyPlacement',

    },
    {
      key: "4",
      question: "¿Cómo y cuándo pago las cuotas?",
      content:
        `Las cuotas<strong> se descontarán automáticamente de la liquidación de ventas</strong>. Podrás visualizarlo en el resumen del Estado de Cuenta y en la solapa Créditos de la sección Finanzas en Partner Portal. <br />
        Las cuotas<strong> serán consideradas como pagas cuando se realice el cobro total</strong>. Si en la liquidación semanal de ventas no se pudo realizar el cobro total de la cuota,<strong> se descontará de la siguiente liquidación hasta alcanzar el monto total a cobrar</strong>.<br />                          
        Y<strong> si quieres completar el pago de la cuota antes del cierre de la siguiente liquidación, podrás realizar una transferencia bancaria</strong> a la cuenta indicada en la solapa Créditos, dentro de la sección Finanzas en Partner Portal.`,
        event: 'credit_more_info.clicked',
        faqUser: 'userid',
        questionClicked: 'Como y cuando pago las cuotas',
        questionEvent: 'howIsPaid',

    },
  ];


  const handleFaqsClick = (event, questionClicked, questionEvent, faqUser) => {
    
    window.dataLayer.push({'event': event, 'userId': faqUser, 'questionClicked': questionClicked, 'questionEvent': questionEvent});
          //    console.log({'event': event, 'userId': faqUser, 'questionClicked': questionClicked, 'questionEvent': questionEvent});    
  }; 

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-bold",
    content: "text-small px-2",
    indicator: "a",
  };

  


  return (
    <section id="faqs" className={styles.faqsContainer}>
      <div className="container w-[95vw] sm:w-[100vw] md:w-[50vw] lg:w-[68vw] xl:w-[68vw]">
      <h2>Preguntas frecuentes</h2>


      <div style={styles}>
      
      {faqData.map((faq) => (
            <AccordionComponent num={faq.key} title={faq.question} content={faq.content}
            onPress={() =>
              handleFaqsClick(faq.event, faq.questionClicked, faq.questionEvent, faq.faqUser)                
            }
             />
          ))} 
      
    </div>

        </div>
    </section>
  );
};


export default Faqs;
