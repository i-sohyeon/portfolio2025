import { ReactNode } from "react";

export type UITextVariant =
  | "mainTitle"
  | "contentTitle"
  | "h1"
  | "h2"
  | "h3"
  | "p"
  | "span"
  | "caption";

export type UITextSize =
  | "fs12"
  | "fs16"
  | "fs20"
  | "fs24"
  | "fs28"
  | "fs32"
  | "fs36"
  | "fs40"
  | "fs48";
export type UITextWeight = "normal" | "bold";
export type UITextStyle = "tenada" | "bold";
export type UITextColor = "white" | "blue";
export type UIDisplay = "block" | "inline" | "inline-block";
export type UITextHeaderSize = "lg" | "md";
export type UITextOpacity =
  | "10"
  | "20"
  | "30"
  | "40"
  | "50"
  | "60"
  | "70"
  | "80";

export interface UITextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextVariant;
  size?: UITextSize;
  weight?: UITextWeight;
  color?: UITextColor;
  font?: UITextStyle;
  display?: UIDisplay;
  opacity?: UITextOpacity;
  as?: React.ElementType;
}

export interface UITextHeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextVariant;
  size?: UITextHeaderSize;
  weight?: UITextWeight;
  font?: UITextStyle;
  color?: UITextColor;
  button?: string;
  as?: React.ElementType;
  linkTo?: string;
  children?: ReactNode;
}
