// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Hero = () => {
//   return (
//     <div className="w-full min-h-screen relative overflow-hidden">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         loop={true}
//         pagination={{ clickable: true }}
//         navigation={true}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         className="w-full h-full"
//         spaceBetween={50}
//         slidesPerView={1}
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div 
//             className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-24 bg-cover bg-center bg-no-repeat text-black"
//             style={{ backgroundImage: "url('https://htmlbeans.com/html/botanical/images/b-bg.jpg')" }}
//           >
//             <div className="text-center md:text-left max-w-2xl">
//               <h2 className="text-5xl md:text-7xl font-bold">Plants for Healthy Living</h2>
//               <span className="block w-28 h-1 bg-green-500 mt-2"></span>
//               <p className="text-2xl my-6">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
//               <button className="bg-green-600 text-white text-xl py-3 px-8 rounded-full hover:bg-green-700 transition duration-300">
//                 Shop Now
//               </button>
//             </div>
//             <img 
//               src="https://htmlbeans.com/html/botanical/images/img77.png" 
//               alt="Plant 1" 
//               className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-lg object-contain"
//             />
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div 
//             className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-24 bg-cover bg-center bg-no-repeat text-black"
//             style={{ backgroundImage: "url('https://htmlbeans.com/html/botanical/images/b-bg3.jpg')" }}
//           >
//             <div className="text-center md:text-left max-w-2xl">
//               <h2 className="text-5xl md:text-7xl font-bold">Fresh Indoor Plants</h2>
//               <span className="block w-28 h-1 bg-green-500 mt-2"></span>
//               <p className="text-2xl my-6">Perfect plants for your home and office spaces.</p>
//               <button className="bg-green-600 text-white text-xl py-3 px-8 rounded-full hover:bg-green-700 transition duration-300">
//                 Shop Now
//               </button>
//             </div>
//             <img 
//               src="https://htmlbeans.com/html/botanical/images/img78.png" 
//               alt="Plant 2" 
//               className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-lg object-contain"
//             />
//           </div>
//         </SwiperSlide>

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <div 
//             className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-24 bg-cover bg-center bg-no-repeat text-black"
//             style={{ backgroundImage: "url('https://htmlbeans.com/html/botanical/images/b-bg2.jpg')" }}
//           >
//             <div className="text-center md:text-left max-w-2xl">
//               <h2 className="text-5xl md:text-7xl font-bold">Natural & Beautiful</h2>
//               <span className="block w-28 h-1 bg-green-500 mt-2"></span>
//               <p className="text-2xl my-6">Bring nature closer to your living spaces.</p>
//               <button className="bg-green-600 text-white text-xl py-3 px-8 rounded-full hover:bg-green-700 transition duration-300">
//                 Shop Now
//               </button>
//             </div>
//             <img 
//               src="https://htmlbeans.com/html/botanical/images/img79.png" 
//               alt="Plant 3" 
//               className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-lg object-contain"
//             />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaSpinner } from "react-icons/fa"; // Import loading icon

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {loading ? (
        // Loading spinner
        <div className="flex justify-center  bg-green-500 items-center min-h-screen">
          <FaSpinner className="text-white text-5xl animate-spin" />
          <h1 className="text-white text-3xl">loading..</h1>
        </div>
      ) : (
        // Swiper Section
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
            <div
              className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-24 bg-cover bg-center bg-no-repeat text-black"
              style={{
                backgroundImage:
                  "url('https://htmlbeans.com/html/botanical/images/b-bg.jpg')",
              }}
            >
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-bold">
                  Plants for Healthy Living
                </h2>
                <span className="block w-28 h-1 bg-green-500 mt-2"></span>
                <p className="text-2xl my-6">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="bg-green-600 text-white text-xl py-3 px-8 rounded-full hover:bg-green-700 transition duration-300">
                  Shop Now
                </button>
              </div>
              <img
                src="https://htmlbeans.com/html/botanical/images/img77.png"
                alt="Plant 1"
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-lg object-contain"
              />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-24 bg-cover bg-center bg-no-repeat text-black"
              style={{
                backgroundImage:
                  "url('https://htmlbeans.com/html/botanical/images/b-bg3.jpg')",
              }}
            >
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-bold">
                  Fresh Indoor Plants
                </h2>
                <span className="block w-28 h-1 bg-green-500 mt-2"></span>
                <p className="text-2xl my-6">
                  Perfect plants for your home and office spaces.
                </p>
                <button className="bg-green-600 text-white text-xl py-3 px-8 rounded-full hover:bg-green-700 transition duration-300">
                  Shop Now
                </button>
              </div>
              <img
                src="https://htmlbeans.com/html/botanical/images/img78.png"
                alt="Plant 2"
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-lg object-contain"
              />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-24 bg-cover bg-center bg-no-repeat text-black"
              style={{
                backgroundImage:
                  "url('https://htmlbeans.com/html/botanical/images/b-bg2.jpg')",
              }}
            >
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-bold">
                  Natural & Beautiful
                </h2>
                <span className="block w-28 h-1 bg-green-500 mt-2"></span>
                <p className="text-2xl my-6">
                  Bring nature closer to your living spaces.
                </p>
                <button className="bg-green-600 text-white text-xl py-3 px-8 rounded-full hover:bg-green-700 transition duration-300">
                  Shop Now
                </button>
              </div>
              <img
                src="https://htmlbeans.com/html/botanical/images/img79.png"
                alt="Plant 3"
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-lg object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default Hero;
