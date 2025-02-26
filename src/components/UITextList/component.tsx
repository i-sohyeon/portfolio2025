import React from "react";
import { UITextListCheckProps, UITextListCircleProps,ItemData,UITextListCheckProps2  } from "./types";
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
      // className
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
    <div>
      <h4>{props.item.title}</h4>
      <p>가격: {props.item.price}원</p>
    </div>
  );
}

export default function UITextListCheck2(props: UITextListCheckProps2) {
  return (
    <div {...props}>
      {props.data.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}

export const Circle: React.FC<UITextListCircleProps> = ({ 
  variant,
  id,
  circleItems,
  className,
  children,
  ...rest

 }) => {
    const classes = [
      styles["ui-textList"],
      styles[`ui-textList-${variant}`],
    ]
      .filter(Boolean)
      .join(" ");

  return (
    // <ul className={`${styles.circleList} ${classes}`}>
    //   {circleItems.map((item, index) => (
    //     <li key={index}>
    //       <div>{item}</div>
    //     </li>
    //   ))}
    // </ul>
    <>
    </>
        

  );
};

const UITextList = {
  Circle, Check,
}

UITextList.Circle.displayName = "UITextList.Circle"
UITextList.Check.displayName = "UITextList.Check"

export {UITextList}