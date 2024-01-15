import styles from "./CardCreditRequest.module.scss";

const CardCreditRequest = ({ imgDesk, imgMob, title, text, number, color, endCardTitle, endCardText}) => {
  return (
    <div className={styles.CardCreditRequestContainer}>
        <div className={styles.card}>
          <div>
            <h3 className={`${styles[endCardTitle]} ${styles[color]}`}><strong>{number}</strong>{title}</h3>
            <p className={`${styles[endCardText]} ${styles[color]}`}>{text}</p>
          </div>
          <div className={styles.cardImg}>
            <img src={imgDesk} className={styles.pasoImgDk}/>
            <img src={imgMob} className={styles.pasoImgMb}/>
          </div>
          
        </div>
    </div>
  );
};

export default CardCreditRequest;
