export type UIBannerVariant = 'text' | 'list' | 'card';
export type UIBannerBgColor = 'type1' | 'type2'| 'type3' | 'type4' | 'type5' | 'type6' ;
export type UIBannerBgPattern = 'check';
export type UITextListIcon = "study" | "company";
export type UIBannerjContent = "center"

export interface UIBannerProps extends React.HTMLAttributes<HTMLElement> {
  icon?: UITextListIcon,
  number?: string,
  title?: string,
  des?: string,
  variant?: UIBannerVariant;
  bgColor?: UIBannerBgColor;
  bgPattern?: UIBannerBgPattern;
  jContent?:UIBannerjContent;
  color?: string;
  as?: React.ElementType;
}
