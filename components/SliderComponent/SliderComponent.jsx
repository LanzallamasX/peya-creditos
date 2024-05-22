import { Swiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { pushTrackingEvent } from "../../utils/pushTrackingEvent";

import { TRACKING_EVENTS } from "../../utils/pushTrackingEvent";


const SliderComponent = ({
  children, id, amount, loopBoolean, paginationBoolean, position, navigation, autoplay

  
}) => {

  let _autoplay;
  _autoplay = autoplay ? autoplay : {
    delay: 4000,
    disableOnInteraction: false,
  };

  const handleSwipeAction = () => {
    
    /*
    pushTrackingEvent(TRACKING_EVENTS.CAROUSEL_SWIPE, {
     carousel: "funciona",
    });

    */

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
      onSwiper={(swiper) => {
        // Configura el manejador de eventos de swiper
        swiper.on('slideChange', handleSwipeAction);
      }} 
      
      
    >
      {children}
      
    </Swiper>
  );
};

export default SliderComponent;