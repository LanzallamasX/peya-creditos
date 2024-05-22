import Link from "next/link";
import styles from "./MainButton.module.scss";
import { isMobile } from "react-device-detect";
import { pushTrackingEvent } from "../../utils/pushTrackingEvent";
import { TRACKING_EVENTS } from "../../utils/pushTrackingEvent";


const MainButton = ({
  href = "https://pedidosya.portal.restaurant/finance-py/credits-redirect?contractId={{contrato}}&",
  id,
  color = "buttonBlue",
  text = "Simular mi crédito",
  fn,
  eventClick,
  userid,
  bannerNumber
}) => {
  
    const handleClickButton = () => {
      pushTrackingEvent(TRACKING_EVENTS.LANDING_OPTION_CLICKED, {
        bannerNumber: "bannerNumber" + bannerNumber,
      });

  
    if (fn) {
      fn();
    }
  };

  return (
<>
{href === "tableAction" ? (
  <button id={id} className={`${styles.mainButton} ${styles[color]}`}
          onClick={handleClickButton}
  >
    {text}
  </button>
) : !isMobile && fn ? (
  <button
    id={id}
    className={`${styles.mainButton} ${styles[color]}`}
    onClick={handleClickButton}
  >
    {text}
  </button>
) : (
  <Link
    href={href}
    target="_blank"
    id={id}
    className={`${styles.mainButton} ${styles[color]}`}
    onClick={handleClickButton}
  >
    {text}
  </Link>
)}
</>





  );
};

export default MainButton;