import styles from "./Testimonials.module.scss";
import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
const Testimonials = ({fn}) => {
  return (
    <section id="testimonialsSection" className={styles.testimonialsContainer}>

            <div className={styles.wrapSlider}>
  {
               <SliderComponent amount={1} paginationBoolean={false} loopBoolean={false}>
                  <SwiperSlide>
                    <div className={styles.wrapImgSlider}>
                      <span className={styles.textInit}>testimonio</span>
                      <img src="/images/test-logo-cata.png" alt="Uso: Remodelar el local" />
                      <span className={styles.textEnd}><i>“Al poder pagar de contado pudimos comprar la chopera a un mejor precio y sumar un exhibidor”</i></span>
                    </div>            
                  </SwiperSlide>     
              </SliderComponent>  

              }    
            </div>                             
    
       <div className={styles.wrapOdometer}>
          <div className={styles.odometerNum}>
              <div className={styles.odometerWrpBf}>+</div>
              <div className={styles.odometerWrpNm}>
                <div className={styles.odometer} id="odometer">10.000</div>
              </div>
          </div>
          <div className={styles.odometerText}>Créditos solicitados</div>
        </div>

    </section>
    
  );
};

export default Testimonials;
