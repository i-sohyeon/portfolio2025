import React from "react";
import { UITextProps } from "./types";
import styles from "./styles.module.scss";

export const UIText: React.FC<UITextProps> = ({
  variant = "span",
  size = "md",
  weight = "normal",
  color,
  as: UIText = "span",
  className,
  children,
  ...rest
}) => {
  const classes = [
    styles["ui-text"],
    styles[`ui-text-${variant}`],
    styles[`ui-text-size-${size}`],
    styles[`ui-text-weight-${weight}`],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <UIText className={classes} style={{ color }} {...rest}>
      {children}
    </UIText>
  );
};

// import React from "react";
// import { UITextProps } from "./types";
// // import styled from 'styled-components';
// import styles from "./UIText.module.scss";
// import "./styles.module.scss";

// export const UIText: React.FC<UITextProps> = ({
//   variant = "body",
//   size = "md",
//   weight = "normal",
//   color,
//   as: Component = "span",
//   className,
//   children,
//   ...rest
// }) => {
//   const classes = [
//     "ui-text",
//     `ui-text-${variant}`,
//     `ui-text-size-${size}`,
//     `ui-text-weight-${weight}`,
//     className
//   ].filter(Boolean).join(" ");

//   return (
//     <Component className={classes} style={{ color }} {...rest}>
//       {children}
//     </Component>
//   );
// };