import React from "react";
import { UIHeaderProps } from "./types";
import styles from "./styles.module.scss";

export const UIHeader: React.FC<UIHeaderProps> = ({
  variant = "div",
  size,
  color,
  as: UIHeader = "div",
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-header"],
    styles[`ui-header-${variant}`],
    styles[`ui-header-${size}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIHeader className={classes} style={{ size }} {...rest}>
      {children}
    </UIHeader>
  );
};