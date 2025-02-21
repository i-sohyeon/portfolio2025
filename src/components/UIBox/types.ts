export type UIBoxVariant = 'type1' | 'type2';
export type UIBoxBgColor = 'gray' | 'blue' ;
export type UIBoxBgPattern = 'check';
export type UIBoxTextAlign = 'left' | 'center' | 'right';

export interface UIBoxProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIBoxVariant;
  bgColor?: UIBoxBgColor;
  bgPattern?: UIBoxBgPattern;
  color?: string;
  align?: string;
  as?: React.ElementType;
}