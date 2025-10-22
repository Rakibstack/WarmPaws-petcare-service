import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Heroslider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
       breakpoints={{
        640: { slidesPerView: 1 }, 
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 }, 
      }}
    >
      <SwiperSlide>
        <img src="https://i.ibb.co.com/DgQ7W9QV/4170730.jpg" alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/fYzsFy9t/4210603.jpg" alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/m3Xw9ZN/8420009.jpg" alt="slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/cczkKDyT/4670307.jpg" alt="slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/bgFshRTp/3865689.jpg" alt="slide 5" />
      </SwiperSlide>
    </Swiper>
  );
}
