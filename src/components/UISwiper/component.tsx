// import React, { useRef, useState } from 'react';
// import ReactDOM from "react-dom";
// Import Swiper React components
import { SwiperProps, SlideItemProps } from './types';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.scss'
<<<<<<< HEAD
// import { Children, ReactNode } from 'react';
=======
>>>>>>> parent of f262704 (UISwiper component props 수정 중)



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

export const Box: React.FC<SwiperProps> = ({
  variant,
  children,
  className,
  ...rest
  
}) => {
  const classes = [
    styles[`ui-swiper`],
    styles[`ui-swiper-${variant}`],
    className,
  ]

  .filter(Boolean)
  .join(" ");

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
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
      className={`${styles.swiperBox} ${classes}`}
      // pagination={{ clickable: true }}
   
    >
      {children}
    </Swiper>
  );
};

<<<<<<< HEAD
export const SlideItem = ({ title, content, imgSrc, children, bgColor }: SlideItemProps) => {
  
  const classes = [
    styles[`ui-swiper`],
    styles[`ui-swiper-${bgColor}`], 
   ]
 
   .filter(Boolean)
   .join(" ");

  return (
    <div className={`${styles.slideItem} ${classes}`}>
      <img src={imgSrc} alt="" />
      <h3>{title}</h3>
=======
interface SlideItemProps {
  title: string;
  content: string;
}

export const SlideItem = ({ title, content }: SlideItemProps) => {
  return (
    <div className={`${styles.slideItem}`}>
      <h2>{title}</h2>
>>>>>>> parent of f262704 (UISwiper component props 수정 중)
      <p>{content}</p>
    </div>
  );
};

const UISwiper = {
  Box
}

UISwiper.Box.displayName = "UISwiper.Box"
export {UISwiper};