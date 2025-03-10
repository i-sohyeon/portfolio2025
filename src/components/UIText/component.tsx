import React from "react";
import { UITextProps, UITextHeaderProps } from "./types";
import styles from "./styles.module.scss";

export const Basic: React.FC<UITextProps> = ({
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

export const Header : React.FC<UITextHeaderProps> = ({
  size,
  font,
  as: UIText = "div",
  className,
  children,
  button,
  btnUrl,
  ...rest
}) => {
  const classes = [
    styles["ui-text-header"],
    styles[`ui-text-header-${size}`],
    styles[`ui-text-haader-${font}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIText className={`${styles.headerButton} ${classes}`} style={{ }} {...rest}>
      <h3>{children}</h3>
      {btnUrl && button ? (
        <a href={btnUrl} type="button">{button}</a>
      ) : null}
    </UIText>
  );
};

const UIText ={
  Basic, Header
}

UIText.Basic.displayName = "UIText.Basic";
UIText.Header.displayName = "UIText.Header";

export {UIText};