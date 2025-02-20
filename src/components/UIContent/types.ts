export type UIContentVariant = 'type1' | 'type2';
// export type UITextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
// export type UITextWeight = "normal" | "bold";

export interface UIContentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIContentVariant;
  color?: string;
  bgColor?: string;
  as?: React.ElementType;
}