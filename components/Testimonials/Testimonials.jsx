import styles from "./Testimonials.module.scss";
import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useInView } from 'react-intersection-observer';

const Testimonials = ({ testimonies }) => {
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
      <div className="container flex justify-between flex-col-reverse	 md:flex-row sm:flex-row">

                  <div ref={screenInView} className={styles.wrapSlider}>
                    {
                    <SliderComponent
                      paginationBoolean={true}
                      loopBoolean={false}
                      navigation={false}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                    >
                      {
                        testimonies.map(testimony => {
                          return (
                            <SwiperSlide>
                              <div className={styles.wrapImgSlider}>
                                <span className={styles.textInit}>testimonio</span>
                                <img src={testimony.img} alt="Logo Testimonial" />
                                <span className={styles.textEnd}><i>{testimony.text}</i></span>
                              </div>            
                            </SwiperSlide>
                          )
                        })
                      }     
                    </SliderComponent>  

                    }    
                  </div>                             
          
            <div className={styles.wrapOdometer}>
                <div className={styles.odometerNum}>
                    <div className={styles.odometerWrpBf}>+</div>
                    <div className={styles.odometerWrpNm}>
                      <div className={styles.odometer} id="odometer"><span className="data">20000</span></div>
                    </div>
                </div>
                <div className={styles.odometerText}>Créditos solicitados</div>
              </div>
        </div>
    </section>
    
  );
};

export default Testimonials;
