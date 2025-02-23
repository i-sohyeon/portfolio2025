
export type UITextVariant = 'mainTitle' | 'contentTitle' | 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'caption';
export type UITextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'| 'xxl';
export type UITextWeight = "normal" | "bold";
export type UITextStyle = "tenada" | "bold";


export interface UITextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextVariant;
  size?: UITextSize;
  weight?: UITextWeight;
  color?: string;
  font?: UITextStyle;
  as?: React.ElementType;
}

// import { ElementType, ReactNode } from 'react';

// // Text variants
// export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';

// // Text sizes
// export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// // Common props for UI components
// export interface UIComponentProps {
//   as?: ElementType;
//   className?: string;
//   children?: ReactNode;
// }

// // UIText specific props
// export interface UITextProps extends UIComponentProps {
//   variant?: TextVariant;
//   size?: TextSize;
//   weight?: 'normal' | 'medium' | 'bold';
//   color?: string;
// }