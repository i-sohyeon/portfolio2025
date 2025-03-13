
export type UIHeaderVariant = 'main';
export type UIHeaderSize =  'md' | 'lg'

export interface UIHeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: UIHeaderVariant;
  size?: UIHeaderSize;
  color?: string;
  as?: React.ElementType;
}