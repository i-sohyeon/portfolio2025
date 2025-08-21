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
    styles[`ui-box-article-${variant}`],
    styles[`ui-box-article-${bgColor}`],
    styles[`ui-box-article-${align}`],
    styles[`ui-box-article-${display}`],
    styles[`ui-box-article-${jContent}`],
    styles[`ui-box-article-${aItems}`],
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
    styles[`ui-box-div-${variant}`],
    styles[`ui-box-div-${bgColor}`],
    styles[`ui-box-div-${align}`],
    styles[`ui-box-div-${display}`],
    styles[`ui-box-div-${jContent}`],
    styles[`ui-box-div-${aItems}`],
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