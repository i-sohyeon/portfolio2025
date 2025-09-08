export type UIIconVariant = "github" | "tistory" | "codepen"  | "mail";
export type UIIconSize = "sm" | "md" | "lg";

export interface UIIconProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIIconVariant;
  size?: UIIconSize;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}
