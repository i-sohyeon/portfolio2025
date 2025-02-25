import React from "react";
import { UITextListCheckProps, UITextListCircleProps } from "./types";
import styles from "./styles.module.scss";


export const Check: React.FC<UITextListCheckProps> = ({ 
  variant,
  items,
  // size,
  // weight = "normal",
  // color,
  // font,
  // as: UITextList = "span",
  className,
  children,
  ...rest

 }) => {
    const classes = [
      styles["ui-textList"],
      styles[`ui-textList-${variant}`],
      // styles[`ui-textList-size-${size}`],
      // styles[`ui-textList-weight-${weight}`],
      // styles[`ui-textList-font-${font}`],
      // className
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <ul className={`${styles.checkList} ${classes}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};


export const Circle: React.FC<UITextListCircleProps> = ({ 
  variant,
  listItems,
  // size,
  // weight = "normal",
  // color,
  // font,
  // as: UITextList = "span",
  className,
  children,
  ...rest

 }) => {
      const classes = [
        styles["ui-textList"],
        styles[`ui-textList-${variant}`],
        // styles[`ui-textList-size-${size}`],
        // styles[`ui-textList-weight-${weight}`],
        // styles[`ui-textList-font-${font}`],
        // className
      ]
        .filter(Boolean)
        .join(" ");

  return (
    <ul>
    {listItems}
  </ul>
  );
};

const UITextList = {
  Circle, Check,
}

UITextList.Circle.displayName = "UITextList.Circle"
UITextList.Check.displayName = "UITextList.Check"

export {UITextList}