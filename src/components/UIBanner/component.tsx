import React from 'react';
import { UIBannerProps } from "./types";
import styles from "./styles.module.scss";

export const UIBanner: React.FC<UIBannerProps> = ({ 
  variant="type1",
  bgColor,
  bgPattern,
  as: UIBanner = "div",
  align,
  className,
  children,
  ...rest

 }) => {

  const classes = [
    styles["ui-Banner"],
    styles[`ui-Banner-${variant}`],
    styles[`ui-Banner-${bgColor}`],
    className
  ]
  .filter(Boolean)
  .join(" ");

  return (
    <UIBanner variant='type1' className={classes} style={{ align }} {...rest}>
      {children}
    </UIBanner>
  );
};