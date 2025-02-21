export type UIContentVariant = 'type1' | 'type2';
export type UIContentBgColor = 'gray' | 'blue' ;
export type UIContentBgPattern = 'check'
// export type UITextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
// export type UITextWeight = "normal" | "bold";

export interface UIContentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIContentVariant;
  bgColor?: UIContentBgColor;
  bgPattern?: UIContentBgPattern;
  color?: string;
  as?: React.ElementType;
}