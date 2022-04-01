/// <reference types="vite/client" />

declare module "*.xht" {
  declare const node = new Node();
  export default () => ({ $dom: node });
}
