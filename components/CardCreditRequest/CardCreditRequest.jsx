import styles from "./CardCreditRequest.module.scss";

const CardCreditRequest = ({ imgDesk, imgMob, title, text, number, color, endCardTitle, endCardText}) => {
  return (
    <div className={styles.CardCreditRequestContainer}>
        <div className={styles.card}>
          <div className={styles.wrapTextCard}>
            <h3 className={`${styles[endCardTitle]} ${styles[color]}`}><strong>{number}</strong>{title}</h3>
            <div className={`${styles.cardImgMob} ${styles[color]}`}>
              <img src={imgMob} className={styles.pasoImgMb}/>
            </div>            
            <p className={`${styles[endCardText]} ${styles[color]}`}>{text}</p>
          </div>
          <div className={styles.cardImg}>
            <img src={imgDesk} className={styles.pasoImgDk}/>
          </div>
          
        </div>
    </div>
  );
};

export default CardCreditRequest;
