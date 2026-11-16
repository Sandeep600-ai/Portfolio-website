/* Ambient Type Declarations for VS Code Language Server when node_modules is not installed */

declare module 'react' {
  export = React;
  export as namespace React;
}

declare namespace React {
  type ReactNode = any;
  type ComponentType<P = any> = any;
  type FC<P = any> = any;
  type ForwardRefExoticComponent<P> = any;
  type PropsWithoutRef<P> = any;
  type RefAttributes<T> = any;
  type HTMLAttributes<T> = any;
  interface HTMLDivElement {}
  interface HTMLParagraphElement {}
  interface HTMLHeadingElement {}
  function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prev: T) => T)) => void];
  function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  function forwardRef<T, P = {}>(
    render: (props: P, ref: any) => any
  ): any;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom' {
  export const render: any;
}

declare module 'clsx' {
  export type ClassValue = any;
  export function clsx(...args: any[]): string;
  export default clsx;
}

declare module 'tailwind-merge' {
  export function twMerge(...args: any[]): string;
}

declare module 'lucide-react' {
  const icons: { [key: string]: any };
  export = icons;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
  export const useSpring: any;
  export const useTransform: any;
  export type SpringOptions = any;
}

declare module '@splinetool/react-spline' {
  const Spline: any;
  export default Spline;
}

declare module '@splinetool/runtime' {
  export class Application {
    load(scene: string): Promise<void>;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface Element extends React.ReactNode {}
}

