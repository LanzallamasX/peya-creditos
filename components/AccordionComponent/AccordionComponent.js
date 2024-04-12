import { useState } from "react";
import styles from "./AccordionComponent.module.scss";
import { pushTrackingEvent } from "../../utils/pushTrackingEvent";

export default function Accordion(props, eventClick) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
    handleFaqsClick(props.event, props.questionClicked);



  };
  

  const handleFaqsClick = (event, questionClicked, eventClick) => {
    
  //  window.dataLayer.push({'event': props.event, 'questionClicked': props.questionClicked});
        //     console.log({'event': props.event, 'questionClicked': props.questionClicked});    

        pushTrackingEvent(event, {
          event: event,
          questionClicked: questionClicked
        });
    

  }; 

  return (
    <div className={styles.wrapAccordion}>
      <button className={styles.buttonAccordion}
        onClick={toggle}
        type="button"
        
      >
        <div className="flex gap-x-4 items-center">
          <h1>{props.num}</h1>
          <p>{props.title}</p>
        </div>
        <div className={styles.arrowimg}>
          <img 
          style={{transform: isShowing ? "rotate(0deg)" : "rotate(180deg)"}}
          src="/images/arrow.svg"/>
        </div>
      </button>
      <div className={styles.contentAccordion}
        style={{ display: isShowing ? "block" : "none" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
      
    </div>
    
  );
}
