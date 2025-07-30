export type UITableVariant = "type1" | "type2";

export interface UITableProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITableVariant;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  period?: string;
  subTitle?: string;
  desc?: string;
  as?: React.ElementType;
}
