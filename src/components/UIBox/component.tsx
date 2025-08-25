import React from "react";
import { UIBoxProps } from "./types";
import styles from "./styles.module.scss";

export const Article: React.FC<UIBoxProps> = ({
  variant,
  bgColor,
  bgPattern,
  as: UIBox = "article",
  align,
  display,
  jContent,
  aItems,
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-box-article"],
    styles[`ui-box-${variant}`],
    styles[`ui-box-${bgColor}`],
    styles[`ui-box-${align}`],
    styles[`ui-box-${display}`],
    styles[`ui-box-${jContent}`],
    styles[`ui-box-${aItems}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={`${classes}`}style={{}} {...rest}>
      {children}
    </article>
  );
};

export const Div: React.FC<UIBoxProps> = ({
  variant,
  bgColor,
  bgPattern,
  as: UIBox = "article",
  align,
  display,
  jContent,
  aItems,
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-box-div"],
    styles[`ui-box-${variant}`],
    styles[`ui-box-${bgColor}`],
    styles[`ui-box-${align}`],
    styles[`ui-box-${display}`],
    styles[`ui-box-${jContent}`],
    styles[`ui-box-${aItems}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${classes}`} style={{}} {...rest}>
      {children}
    </div>
  );
};



const UIBox = {
  Article, Div
}

export {UIBox}