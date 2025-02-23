import React from 'react';
import { UIBoxProps } from "./types";
import styles from "./styles.module.scss";

export const UIBox: React.FC<UIBoxProps> = ({ 
  variant,
  bgColor,
  bgPattern,
  as: UIBox = "div",
  align,
  className,
  children,
  ...rest

 }) => {

  const classes = [
    styles["ui-box"],
    styles[`ui-box-${variant}`],
    styles[`ui-box-${bgColor}`],
    // styles[`ui-box-${textAi}`],
    className
  ]
  .filter(Boolean)
  .join(" ");

  return (
    <UIBox variant='type1' className={classes} style={{ align }} {...rest}>
      {children}
    </UIBox>
  );
};

// 사용 예시
// const App: React.FC = () => {
//   const posts = [
//     { id: 1, title: "TypeScript 기초", content: "타입 시스템 이해하기" },
//     { id: 2, title: "React Hooks", content: "useState 활용법" }
//   ];

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {posts.map(post => (
//         <Content key={post.id} title={post.title} theme="light">
//           <p className="text-gray-600">{post.content}</p>
//         </Content>
//       ))}
//     </div>
//   );
// };