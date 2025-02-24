
export type UITextListVariant = 'check-list';
export type UITextListSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'| 'xxl';
export type UITextListWeight = "normal" | "bold";
export type UITextListStyle = "tenada" | "bold";


export interface UITextListProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextListVariant;
  size?: UITextListSize;
  weight?: UITextListWeight;
  color?: string;
  font?: UITextListStyle;
  as?: React.ElementType;
  items: string[]; // 리스트에 보여질 문자열 배열
}

// interface UITextListProps {
//   items: string[]; // 리스트에 보여질 문자열 배열
// }