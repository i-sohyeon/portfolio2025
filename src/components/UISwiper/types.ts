export type SwiperVariant = "type1"
export type SwiperBgColor = "red" | "yellow"

export interface SwiperProps extends React.HTMLAttributes<HTMLElement> {
  variant?: SwiperVariant;
  children?: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  pagination?: boolean;
  modules?: string[];
  className?:string;
  // modules?: string;
  title?:string;
  as?: React.ElementType;
  bgColor?:SwiperBgColor;
}

export interface SlideItemProps {
  title: string;
  content: string;
  imgSrc: string;
  children?: React.ReactNode;
  bgColor?: SwiperBgColor;
}