import React from "react";
import { UITextListCheckProps, ItemData, UITextListCircleProps  } from "./types";
import styles from "./styles.module.scss";


export const Check: React.FC<UITextListCheckProps> = ({ 
  variant,
  checkItems,
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
      className
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <ul className={`${styles.checkList} ${classes}`}>
      {checkItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

function ItemComponent(props: { item: ItemData }) {
  return (
    <li>
      <span>{props.item.number}</span>
      <div>
        <h3>{props.item.title}</h3>
        <p>{props.item.subText}</p>
      </div>
    </li>
  );
}

export const Circle: React.FC<UITextListCircleProps> = ({
    variant, 
    className,
    bgColor,
    ...props
  }) =>  {

    const classes = [
      styles[`ui-textList`],
      styles[`ui-textList-${variant}`],
      styles[`ui-textList-${bgColor}`],
      // styles[`ui-textList-size-${size}`],
      // styles[`ui-textList-weight-${weight}`],
      // styles[`ui-textList-font-${font}`],
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <ul {...props} className={`${styles.circleList} ${classes}`}>
      {props.data.map((item) => (
        <ItemComponent key={item.id} item={item} {...item} />
      ))}
    </ul>
  );
}



// export default function Circle(props: UITextListCircleProps) {
//   return (
//     <div {...props}>
//       {props.data.map((item) => (
//         <ItemComponent key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }



const UITextList = {
   Check, Circle
}

UITextList.Check.displayName = "UITextList.Check"
UITextList.Check.displayName = "UITextList.Circle"

export {UITextList}