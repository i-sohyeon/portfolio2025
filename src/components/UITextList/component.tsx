import React from "react";
import { UITextListProps } from "./types";
import styles from "./styles.module.scss";

// export const UITextList: React.FC<UITextListProps> = ({
//   variant = "span",
//   size,
//   weight = "normal",
//   color,
//   font,
//   as: UITextList = "span",
//   className,
//   children,
//   ...rest
// }) => {
//   const classes = [
//     styles["ui-textList"],
//     styles[`ui-textList-${variant}`],
//     styles[`ui-textList-size-${size}`],
//     styles[`ui-textList-weight-${weight}`],
//     styles[`ui-textList-font-${font}`],
//     className
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <UITextList className={classes} style={{ color }} {...rest}>
//       {children}
//     </UITextList>
//   );



// };



export const UITextList: React.FC<UITextListProps> = ({ 
  variant = "checklist",
  items,
  // size,
  // weight = "normal",
  // color,
  // font,
  // as: UITextList = "span",
  // className,
  // children,
  // ...rest

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