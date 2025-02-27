
export type UITextListVariant = 'circle' | 'number' | 'check';
export type UITextListSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'| 'xxl';
export type UITextListWeight = "normal" | "bold";
export type UITextListStyle = "tenada" | "bold";
export type UITextListBgColor = "type1" | "type2" | "type3" | "type4" | "type5" ;


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
  bgColor?: UITextListBgColor;
  as?: React.ElementType;
  // id?: string,
  // circleItems?: string[];
}

// test
export interface ItemData {
  id?: number;
  number?: number;
  title?: string;
  subText?:string;
}

export interface UITextListCircleProps extends React.HTMLAttributes<HTMLElement> {
  data: ItemData[];
}
