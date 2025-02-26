
export type UITextListVariant = 'circle' | 'number' | 'check';
export type UITextListSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'| 'xxl';
export type UITextListWeight = "normal" | "bold";
export type UITextListStyle = "tenada" | "bold";


export interface UITextListCheckProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextListVariant;
  size?: UITextListSize;
  weight?: UITextListWeight;
  color?: string;
  font?: UITextListStyle;
  as?: React.ElementType;
  checkItems: string[]; // 리스트에 보여질 문자열 배열
  // steps: string[]; // 리스트에 보여질 문자열 배열
}

export interface UITextListCircleProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UITextListVariant;
  size?: UITextListSize;
  weight?: UITextListWeight;
  color?: string;
  font?: UITextListStyle;
  as?: React.ElementType;
  id?: string,
  circleItems?: string[];
}

// test
export interface ItemData {
  id?: number;
  title?: string;
  price?: number;
}

export interface UITextListCheckProps2 extends React.HTMLAttributes<HTMLElement> {
  data: ItemData[];
}


// type UITextListCircleProps = {
//   id?: string,
//   listItems?: string,
// }

// export type {UITextListCircleProps}