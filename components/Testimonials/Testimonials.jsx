import styles from "./Testimonials.module.scss";
import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useInView } from 'react-intersection-observer';

const Testimonials = ({fn}) => {
  const [screenInView, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const items = document.querySelectorAll(".data");
      let ctx3 = gsap.context(() => {
        gsap.from(items, {
          textContent: 0,
          duration: 3,
          ease: "power1.in",
          snap: { textContent: 1 },
          stagger: {
            each: 1.0,
            onUpdate: function() {
              this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
            },
          }
        });

        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
      });

      return () => ctx3.revert(); // cleanup!
    }
  }, [inView]);

  
  return (
    <section id="testimonialsSection" className={styles.testimonialsContainer}>
      <div className="container flex justify-between">

                  <div ref={screenInView} className={styles.wrapSlider}>
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
                      <div className={styles.odometer} id="odometer"><span className="data">10000</span></div>
                    </div>
                </div>
                <div className={styles.odometerText}>Créditos solicitados</div>
              </div>
        </div>
    </section>
    
  );
};

export default Testimonials;
