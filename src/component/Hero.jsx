import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div className="w-full h-screen min-h-[500px] relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
        spaceBetween={50}
        slidesPerView={1}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 h-full">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Plants for Healthy Living</h2>
              <p className="text-lg my-4">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">
                Shop Now
              </button>
            </div>
            <img 
              src="https://htmlbeans.com/html/botanical/images/img77.png" 
              alt="Plant 1" 
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg object-contain"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 h-full">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Fresh Indoor Plants</h2>
              <p className="text-lg my-4">Perfect plants for your home and office spaces.</p>
              <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">
                Shop Now
              </button>
            </div>
            <img 
              src="https://htmlbeans.com/html/botanical/images/img78.png" 
              alt="Plant 2" 
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg object-contain"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 h-full">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Natural & Beautiful</h2>
              <p className="text-lg my-4">Bring nature closer to your living spaces.</p>
              <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">
                Shop Now
              </button>
            </div>
            <img 
              src="https://htmlbeans.com/html/botanical/images/img79.png" 
              alt="Plant 3" 
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
