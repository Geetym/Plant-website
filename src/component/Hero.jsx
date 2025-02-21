// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://htmlbeans.com/html/botanical/images/img77.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://htmlbeans.com/html/botanical/images/img78.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://htmlbeans.com/html/botanical/images/img79.png" alt="" /></SwiperSlide>
      {/* <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
  );
};

export default Hero