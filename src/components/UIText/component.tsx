import React from "react";
import { UITextProps } from "./types";
import styles from "./styles.module.scss";

export const UIText: React.FC<UITextProps> = ({
  variant = "span",
  size,
  weight = "normal",
  color,
  font,
  as: UIText = "span",
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-text"],
    styles[`ui-text-${variant}`],
    styles[`ui-text-${size}`],
    styles[`ui-text-${weight}`],
    styles[`ui-text-${font}`],
    styles[`ui-text-${color}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIText className={classes} style={{ }} {...rest}>
      {children}
    </UIText>
  );
};