import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";





const SliderComponent = ({ children, id, amount, loopBoolean, paginationBoolean, position, eventClick, userId}) => {



  function handleSwipeAction () {

    /*
    dataLayer.push({'event': eventClick, 'userId': userId,});
    console.log({'event': eventClick, 'userId': userId,});

    */
  }


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
      onSlideChange={() => {handleSwipeAction()}}
    >
      {children}
      
    </Swiper>
  );
};

export default SliderComponent;