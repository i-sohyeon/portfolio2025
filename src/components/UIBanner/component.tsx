import React from 'react';
import { UIBannerProps } from "./types";
import styles from "./styles.module.scss";

export const List: React.FC<UIBannerProps> = ({
  number,
  title,
  des,
  variant,
  bgColor,
  bgPattern,
  as: UIBanner = "div",
  className,
  children,
  ...rest

 }) => {

  const classes = [
    styles["ui-banner"],
    styles[`ui-banner-${variant}`],
    styles[`ui-banner-${bgColor}`],
    className
  ]
  .filter(Boolean)
  .join(" ");

  return (
    <UIBanner className={`${styles.bannerList} ${classes}`} style={{ bgColor }} {...rest}>
      {/* {children} */}
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
      
    </UIBanner>
  );
};

const UIBanner = {
  List,
}

UIBanner.List.displayName = "UIBanner.List";

export { UIBanner };