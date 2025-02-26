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
    <div>
      <span>{props.item.number}</span>
      <p>{props.item.text}</p>
    </div>
  );
}

export const Circle: React.FC<UITextListCircleProps> = ({
    ...props
  }) =>  {
  return (
    <div {...props}>
      {props.data.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
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


// export const Circle: React.FC<UITextListCircleProps> = ({ 
//   variant,
//   id,
//   circleItems,
//   className,
//   children,
//   ...rest

//  }) => {
//     const classes = [
//       styles["ui-textList"],
//       styles[`ui-textList-${variant}`],
//     ]
//       .filter(Boolean)
//       .join(" ");

//   return (
//     // <ul className={`${styles.circleList} ${classes}`}>
//     //   {circleItems.map((item, index) => (
//     //     <li key={index}>
//     //       <div>{item}</div>
//     //     </li>
//     //   ))}
//     // </ul>
//     <>
//     </>
        

//   );
// };

const UITextList = {
   Check, Circle
}

// UITextList.Circle.displayName = "UITextList.Circle"
UITextList.Check.displayName = "UITextList.Check"
UITextList.Check.displayName = "UITextList.Circle"

export {UITextList}