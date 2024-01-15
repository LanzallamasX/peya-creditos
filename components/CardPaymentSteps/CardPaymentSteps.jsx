import styles from "./CardPaymentSteps.module.scss";

const CardCreditRequest = ({ img, text}) => {
  return (
    <div className={styles.cardCardPaymentSteps}>
        <div className={styles.card1}>
          <p>{text}</p>
            <div className={styles.card1cntwrapper}>
              <div className={styles.card1img}>
                 <img src={img}/>
              </div>
            </div>
          </div>

    </div>
  );
};

export default CardCreditRequest;
