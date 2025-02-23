export type UIBannerVariant = 'text' | 'list' | 'card';
export type UIBannerBgColor = 'gray' | 'blue' ;
export type UIBannerBgPattern = 'check';
// export type UIBannerTextAlign = 'left' | 'center' | 'right';

export interface UIBannerProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIBannerVariant;
  bgColor?: UIBannerBgColor;
  bgPattern?: UIBannerBgPattern;
  color?: string;
  align?: string;
  as?: React.ElementType;
}