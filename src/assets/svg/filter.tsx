import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <path
        data-name="Fill 1"
        d="m25.714 23.542 13.012-13.053A4.4 4.4 0 0 0 40 7.386V3.558C40 1.156 38.094 0 35.743 0H4.257C1.906 0 0 1.156 0 3.558v3.9a4.406 4.406 0 0 0 1.15 2.977L13.1 23.474a1.192 1.192 0 0 0 .873.388l10.893.031a1.174 1.174 0 0 0 .844-.35"
        fill="#ff7746"
      />
      <path
        data-name="Fill 4"
        d="M13.458 23.746v14.677a1.589 1.589 0 0 0 .71 1.323 1.513 1.513 0 0 0 .834.251 1.547 1.547 0 0 0 .643-.14l8.813-4.105a1.577 1.577 0 0 0 .905-1.435V23.746Z"
        fill="#ff7746"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgComponent;
