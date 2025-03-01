import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { UISwiperProps } from './types';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Pagination } from 'swiper/modules';

export const Basic: React.FC<UISwiperProps> = ({
 variant,
 as: UISwiper = "div",
}) => {
  return (
    <UISwiper
      slidesPerView={'auto'}
      spaceBetween={30}
      pagination={{
      clickable: true,
    }}
      modules={[Pagination]}
      className="mySwiper">
  <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
    </UISwiper>

  );
};

const UISwiper = {
  Basic,
}

UISwiper.Basic.displayName = "UISwiper.Basic";

export { UISwiper };