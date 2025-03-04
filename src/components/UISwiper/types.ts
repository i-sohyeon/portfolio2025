export type SwiperVariant = "type1"

export interface SwiperProps extends React.HTMLAttributes<HTMLElement> {
  variant?: SwiperVariant;
  children?: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  pagination?: boolean;
  modules?: string[]
  // modules?: string;
  
  as?: React.ElementType;
}