import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Only if using fade
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import imgCow from "../Assets/images/Hero_cowImg.jpg";

function Hero() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1000} // Smooth 1s transition
      effect="slide" // Or "fade" for a crossfade effect
      loop={true}
      modules={[Pagination, Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide><img src={imgCow} alt="Cow" /></SwiperSlide>
      <SwiperSlide><img src={imgCow} alt="Cow" /></SwiperSlide>
      <SwiperSlide><img src={imgCow} alt="Cow" /></SwiperSlide>
      <SwiperSlide><img src={imgCow} alt="Cow" /></SwiperSlide>
    </Swiper>
  );
}

export default Hero;
