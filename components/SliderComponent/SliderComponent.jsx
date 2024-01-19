import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";





const SliderComponent = ({ children, id, amount, loopBoolean, paginationBoolean, position }) => {



  return (
    <Swiper
      slidesPerView={amount}
      direction={position}
      pagination={paginationBoolean}
      modules={[Pagination, Autoplay]}
      spaceBetween={7}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={loopBoolean}
      id={id}
    >
      {children}
      
    </Swiper>
  );
};

export default SliderComponent;