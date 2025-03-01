export type UISwiperVariant = "type1"

export interface UISwiperProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UISwiperVariant;
  as?: React.ElementType;
}