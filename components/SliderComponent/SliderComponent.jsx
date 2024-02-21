import { Swiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const SliderComponent = ({
  children, id, amount, loopBoolean, paginationBoolean, position, navigation, autoplay
}) => {

  let _autoplay;
  _autoplay = autoplay ? autoplay : {
    delay: 4000,
    disableOnInteraction: false,
  };

  return (
    <Swiper
      slidesPerView={amount}
      direction={position}
      pagination={paginationBoolean}
      
      modules={[Pagination, Autoplay, Navigation]}
      navigation = {navigation}
      spaceBetween={7}
      autoplay={_autoplay}
      loop={loopBoolean}
      id={id}

      
      
    >
      {children}
      
    </Swiper>
  );
};

export default SliderComponent;