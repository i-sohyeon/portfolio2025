export type UIParagraphVariant = "solid" | "line";

export interface UIParagraphProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIParagraphVariant;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  period?: string;
  subTitle?: string;
  desc?: string;
  as?: React.ElementType;
}
