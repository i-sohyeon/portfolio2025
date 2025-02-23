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
    styles[`ui-text-size-${size}`],
    styles[`ui-text-weight-${weight}`],
    styles[`ui-text-font-${font}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIText className={classes} style={{ color }} {...rest}>
      {children}
    </UIText>
  );
};