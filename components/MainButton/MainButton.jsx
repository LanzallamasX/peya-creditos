import Link from "next/link";
import styles from "./MainButton.module.scss";
import { isMobile } from "react-device-detect";

const MainButton = ({
  href = "#",
  id,
  color = "buttonBlue",
  text = "Simular mi crédito",
  fn,
}) => {
  const handleClick = () => {
    // Coloca cualquier lógica adicional que desees ejecutar antes de enviar el evento
    // ...

    // Envía el evento a dataLayer
    window.dataLayer.push({'event': 'button1-click'});

    // Llama a la función adicional si está presente
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