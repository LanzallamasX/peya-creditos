import { useEffect, useState } from "react";
import styles from "./CarouselSwiper.module.scss";
import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CarouselSwiper = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Verificar si window está definido antes de acceder a window.innerWidth
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    // Agregar el event listener al montar el componente
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Llamar a handleResize al cargar la página para obtener el tamaño inicial
    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => {
      // Verificar si window está definido antes de quitar el event listener
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); // La dependencia vacía asegura que el efecto se ejecute solo una vez al montar el componente

  // Calcular 'amount' basado en el ancho de la ventana
  const amount = windowWidth < 500 ? "1" : "5";

  return (    
    <div id="usos" className={styles.usosContainer}>
      <div>
        <h2>¿Para qué lo podés usar?</h2>
        <p>Usalo para lo que necesites</p>
        <SliderComponent amount={amount} paginationBoolean={false} loopBoolean={true}>
              <SwiperSlide>
                <div className={styles.wrapImgSlider}>
                  <img src="/images/icoCarousel/ico-local.svg" alt="Uso: Remodelar el local" />
                  <span>Remodelar <br /> el local</span>
                </div>            
              </SwiperSlide>   
              <SwiperSlide>
                <div className={styles.wrapImgSlider}>
                  <img src="/images/icoCarousel/ico-mercaderia.svg" alt="Uso: Comprar mercadería" />
                  <span>Comprar <br />mercadería</span>
                </div>            
              </SwiperSlide>             
              <SwiperSlide>
                <div className={styles.wrapImgSlider}>
                  <img src="/images/icoCarousel/ico-publicidad.svg" alt="Uso: Invertir en publicidad" />
                  <span>Invertir <br /> en publicidad</span>
                </div>            
              </SwiperSlide>  
              <SwiperSlide>
                <div className={styles.wrapImgSlider}>
                  <img src="/images/icoCarousel/ico-equipamiento.svg" alt="Uso: Comprar equipamiento" />
                  <span>Comprar <br />equipamiento</span>
                </div>            
              </SwiperSlide>   
              <SwiperSlide>
                <div className={styles.wrapImgSlider}>
                  <img src="/images/icoCarousel/ico-nueva-sucursal.svg" alt="Uso: Abrir una nueva sucursal" />
                  <span>Abrir una<br />nueva sucursal</span>
                </div>            
              </SwiperSlide> 
              <SwiperSlide>
                <div className={styles.wrapImgSlider}>
                  <img src="/images/icoCarousel/ico-personal.svg" alt="Uso: Contratar empleados" />
                  <span>Contratar<br />personal</span>
                </div>            
              </SwiperSlide>                                                
          </SliderComponent>
        </div>
    </div>  
  );
};

export default CarouselSwiper;