export type SwiperVariant = "type1";
export type SwiperBgColor = "red" | "yellow" | "gray" | "light-blue" | "green" | "brown";
export type SwiperTextColor = "purple" | "green" | "black" | "blue" | "yellow"

export interface SwiperProps extends React.HTMLAttributes<HTMLElement> {
  variant?: SwiperVariant;
  children?: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  pagination?: boolean;
  modules?: string[];
  className?: string;
  // modules?: string;
  title?: string;
  titleColor?: SwiperTextColor;
  as?: React.ElementType;
  bgColor?: SwiperBgColor;
  ref?: string;
}

export interface SlideItemProps {
  title: string;
  titleColor?: SwiperTextColor;
  content: string;
  imgSrc: string;
  children?: React.ReactNode;
  bgColor?: SwiperBgColor;
  ref?: string;
}
