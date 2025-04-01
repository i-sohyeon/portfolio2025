import React from "react";
import { UIDividerProps } from "./types";
import styles from "./styles.module.scss";

export const UIDivider: React.FC<UIDividerProps> = ({
  variant,
  children,
  className,
}) => {
  const classes = [
    styles["ui-divider"],
    styles[`ui-divider-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};
