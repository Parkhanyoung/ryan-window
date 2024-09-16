declare module '*.png' {
  export default string;
}

declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module '*.webp' {
  export default string;
}

declare module '*.module.css';
