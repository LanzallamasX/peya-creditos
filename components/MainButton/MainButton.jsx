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
  return (
    <>
      {href === "tableAction" ? (
        <button id={id} className={`${styles.mainButton} ${styles[color]}`}>
          {text}
        </button>
      ) : !isMobile && fn ? (
        <button
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
          onClick={fn}
        >
          {text}
        </button>
      ) : (
        <Link
          href={href}
          id={id}
          className={`${styles.mainButton} ${styles[color]}`}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default MainButton;
