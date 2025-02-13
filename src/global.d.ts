// declare module '*.module.css' {
//   const content: { [key: string]: string };
//   export = content;
// }

// declare module "*.css";
// declare module "*.sass";
// declare module "*.scss";
// declare module "*.scss" {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.scss' {
//   const content: { [className: string]: string };
//   export = content;
// }

declare module '*.module.scss';
declare module '*.scss';
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}