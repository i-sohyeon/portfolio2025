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
export type UITextSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type UITextWeight = "normal" | "bold";
export type UITextStyle = "tenada" | "bold";
export type UITextColor = "white" | "blue";

export type UITextHeaderSize = "lg" | "md";

export interface UITextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextVariant;
  size?: UITextSize;
  weight?: UITextWeight;
  color?: UITextColor;
  font?: UITextStyle;
  as?: React.ElementType;
}

export interface UITextHeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextVariant;
  size?: UITextHeaderSize;
  weight?: UITextWeight;
  font?: UITextStyle;
  button?: string;
  as?: React.ElementType;
  linkTo?: string;
  children?: ReactNode;
}
