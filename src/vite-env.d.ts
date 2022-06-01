/// <reference types="vite/client" />

declare const node = new Node();

type ComponentInstance = {
  readonly destroy(): void;
  readonly $dom: typeof node;
}

type Component = <E = {}>(props?: Record<string, unknown>) => ComponentInstance & E;

declare module "*.xht" {
  const component: Component;
  export default component
}

declare module 'malinajs/runtime' {
  declare const mount: <T extends Component>(label: HTMLElement | typeof node, component: Component, option?: Parameters<T>[0]) => ReturnType<T>;
}