export type UIIconVariant = "github" | "tistory" | "codepen"  | "mail";
export type UIIconSize = "sm" | "md" | "lg";
export type UIIconColor = "wht";

export interface UIIconProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIIconVariant;
  size?: UIIconSize;
  color?:UIIconColor;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}
