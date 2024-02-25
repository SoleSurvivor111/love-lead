declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export = content;
}
