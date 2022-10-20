declare module '*.svg.?js' {
  import React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

type SVGRComponent = React.FC<React.SVGProps<SVGSVGElement>>;
