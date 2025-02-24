export type UIBoxVariant = 'content' | 'flex';
export type UIBoxBgColor = 'gray' | 'blue'| 'pink' ;
export type UIBoxBgPattern = 'check';
export type UIBoxTextAlign = 'left' | 'center' | 'right';

export interface UIBoxProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIBoxVariant;
  bgColor?: UIBoxBgColor;
  bgPattern?: UIBoxBgPattern;
  color?: string;
  align?: UIBoxTextAlign;
  as?: React.ElementType;
}

type UIBoxContent = {

} 

type UIBoxDiv = {
  
}