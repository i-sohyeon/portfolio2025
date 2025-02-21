import React from "react";
import { UITextProps } from "./types";
import styles from "./styles.module.scss";

export const UIText: React.FC<UITextProps> = ({
  variant = "span",
  size = "md",
  weight = "normal",
  color,
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