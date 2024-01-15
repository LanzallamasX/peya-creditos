import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SliderComponent = ({ children, id, amount, loopBoolean, paginationBoolean}) => {
  return (
    <Swiper
      slidesPerView={amount}
      
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


