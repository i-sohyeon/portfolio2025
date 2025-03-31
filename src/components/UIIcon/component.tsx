import React from "react";
import { UIIconProps } from "./types";
import styles from "./styles.module.scss";

export const UIIcon: React.FC<UIIconProps> = ({
  variant,
  size,
  children,
  className,
}) => {
  const classes = [
    styles["ui-icon"],
    styles[`ui-icon-${variant}`],
    styles[`ui-icon-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
};
