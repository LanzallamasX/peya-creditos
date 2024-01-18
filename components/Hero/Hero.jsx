import SliderComponent from "../SliderComponent/SliderComponent";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import MainButton from "../MainButton/MainButton";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Hero.module.scss";
import { useEffect, useState } from "react";

const Hero = ({ imagesArray, fn, tyc }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(imagesArray);
  }, []);


  return (
    
    <section id="hero" className={styles.heroContainer}>
      
      <SliderComponent amount="1" paginationBoolean={true} loopBoolean={false}>
        
        {imagesArray.length === 0 ? (
          <SwiperSlide>
            <SkeletonLoader locationClass={"skeletonHeroContainer"} />
          </SwiperSlide>
        ) : windowWidth > 500 ? (
          imagesArray
            .filter((item) => item.device !== "mobile")
            .map((data) => (
              <SwiperSlide key={data.id}>
                <div className={styles.bgSliderContainer} style={{ backgroundImage: `url(${data.url})` }}></div>
                <div className={styles.spacerMedium}></div>
                <div className={styles.heroSliderContainer}>
                  
                  <div className={styles.heroTopContainer}>
                    <h1>{data.title}</h1>
                    <h3>{data.subtitle}</h3>

                    <MainButton href={data.buttonLink} eventClick={"clickHero"} />
                    {data.tyc !== "" && data.tyc !== null ? (
                      <small onClick={() => tyc(data.tyc)}>
                        Más información
                      </small>
                    ) : undefined}
                  </div>                  

                </div>
              </SwiperSlide>
            ))
        ) : (
          imagesArray
            .filter((item) => item.device === "mobile")
            .map((data) => (
              <SwiperSlide key={data.id}>
                <div className={styles.bgSliderContainer} style={{ backgroundImage: `url(${data.url})` }}></div>
                <div className={styles.spacerMedium}></div>
                <div className={styles.heroSliderContainer}>
                  
                  <div className={styles.heroTopContainer}>
                    <h1>{data.title}</h1>
                    <h3>{data.subtitle}</h3>

                    <MainButton href={data.buttonLink} fn={fn} />
                    {data.tyc !== "" && data.tyc !== null ? (
                      <small onClick={() => tyc(data.tyc)}>
                        Más información
                      </small>
                    ) : undefined}
                  </div>                  

                </div>
              </SwiperSlide>
            ))
        )}
      </SliderComponent>
      
    </section>
  );
};

export default Hero;
