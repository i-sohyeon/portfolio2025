export type UIBoxVariant = "content" | "flex";
export type UIBoxBgColor = "gray" | "blue" | "pink";
export type UIBoxBgPattern = "check";
export type UIBoxTextAlign = "left" | "center" | "right";
export type UIBoxDisplay = "flex";
export type UIBoxjustifyContent = "space-between";

export interface UIBoxProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIBoxVariant;
  bgColor?: UIBoxBgColor;
  bgPattern?: UIBoxBgPattern;
  color?: string;
  align?: UIBoxTextAlign;
  display?: UIBoxDisplay;
  jContent?: UIBoxjustifyContent;
  as?: React.ElementType;
}

// type UIBoxContent = {

// }

// type UIBoxDiv = {

// }
