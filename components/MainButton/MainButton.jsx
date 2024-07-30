import Link from "next/link";
import styles from "./MainButton.module.scss";
import { isMobile } from "react-device-detect";
import { pushTrackingEvent } from "../../utils/pushTrackingEvent";
import { TRACKING_EVENTS } from "../../utils/pushTrackingEvent";
import { useEffect } from 'react';


const MainButton = ({
  href = "https://pedidosya.portal.restaurant/finance-py/credits-redirect?contractId={{contrato}}&",
  id,
  color = "buttonBlue",
  text = "Simular mi crédito",
  fn,
  bannerNumber
}) => {


  useEffect(() => {
    // Verifica si fbq está disponible
    /*
    if (typeof fbq === 'function') {
      console.log('Sending MyCustomEvent');

      fbq('trackCustom', 'MyCustomEvent', {
        eventCategory: 'Category',
        eventAction: 'Action',
        eventLabel: 'Label',
        value: 10
      });
    }
      */
  }, []);
  
    const handleClickButton = () => {
      pushTrackingEvent(TRACKING_EVENTS.LANDING_OPTION_CLICKED, {
        bannerNumber: "bannerNumber" + bannerNumber,
      });

      if (typeof fbq === 'function') {
//      console.log('Sending ButtonClicked event');
        fbq('trackCustom', 'ButtonClicked', {
          eventCategory: 'UserInteraction',
          eventAction: 'Click',
          eventLabel: "bannerNumber" + bannerNumber,
          value: 1
        });
      } else {
       // console.error('fbq is not defined');
      }

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