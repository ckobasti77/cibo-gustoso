import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper";
import { sliderImages } from "../constants";

const Slider = () => {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      className="mySwiper w-[100vw]"
      id="team"
      slidesPerView={5.5}
      spaceBetween={20}
      breakpoints={{
        1200: {
          slidesPerView: 6.5,
        },
        992: {
          slidesPerView: 3.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        576: {
          slidesPerView: 1.5,
        },
        320: {
          slidesPerView: 1.5,
        },
      }}
    >
      {sliderImages.map((single) => {
        return (
          <SwiperSlide className="swiper-card w-full" key={single.id}>
              <img src={single.img} alt="milos" className="rounded-xl h-[300px] w-[250px] object-cover" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
