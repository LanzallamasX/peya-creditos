import { useState } from "react";
import styles from "./AccordionComponent.module.scss";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
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
