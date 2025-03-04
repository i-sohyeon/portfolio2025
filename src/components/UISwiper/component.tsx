// import React, { useRef, useState } from 'react';
// import ReactDOM from "react-dom";
// Import Swiper React components
import { SwiperProps } from './types';
// import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// export const UISwiper: React.FC<SwiperProps> = ({
//   variant,
//   as: Swiper = "div",
//   children,
//   spaceBetween = 50,
//   slidesPerView = 1,
//   navigation = true,
//   pagination,
//   className,
//   ...props
// }) => {
//   return (
//     <Swiper
//       pagination
//       modules={[Navigation, Pagination, A11y, Autoplay]}
//       {...props}
//     >
//       {children}
//     </Swiper>

//     // <Swiper
//     //   // slidesPerView={'auto'}
//     //   // spaceBetween={30}
//     // //   pagination={{
//     // //   clickable: true,
//     // // }}
//     //   modules={[Pagination, Navigation]}
//     //   // modules={[Navigation, Pagination]}
//     //   spaceBetween={spaceBetween}
//     //   slidesPerView={slidesPerView}
//     //   navigation={navigation}
//     //   // pagination={pagination}
//     //   className="mySwiper">
//     //   {/* <SwiperSlide>Slide 1</SwiperSlide> */}
//     //    {children}
//     //   </Swiper>

//   );
// };

export const UISwiper: React.FC<SwiperProps> = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={2}
      //   breakpoints={{
      //   768: {
      //     slidesPerView: 2,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //   },
      // }}
      navigation={false}
      // pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Slide 3</div>
      </SwiperSlide>
    </Swiper>
  );
};

// const Swiper = {
//   Basic,
// }

// Swiper.Basic.displayName = "Swiper.Basic";

// export { UISwiper };

export default UISwiper;