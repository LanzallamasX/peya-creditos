import Link from "next/link";
import styles from "./MainButton.module.scss";
import { isMobile } from "react-device-detect";

const MainButton = ({
  href = "#",
  id,
  color = "buttonBlue",
  text = "Simular mi crédito",
  fn,
  eventClick
}) => {
  
  const handleClick = () => {
    
    window.dataLayer.push({'event': eventClick});
    console.log({'event': eventClick});

    if (fn) {
      fn();
    }
  };

  return (
    <>
      <button
        id={id}
        className={`${styles.mainButton} ${styles[color]}`}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default MainButton;