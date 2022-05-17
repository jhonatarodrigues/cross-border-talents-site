import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34.001}
      height={40}
      {...props}
    >
      <path
        data-name="Fill 1"
        d="M25.463 40H8.538A8.454 8.454 0 0 1 0 31.652v-9.874a8.455 8.455 0 0 1 8.538-8.35h16.925A8.455 8.455 0 0 1 34 21.778v9.873A8.454 8.454 0 0 1 25.463 40Zm-8.472-17.232a1.751 1.751 0 0 0-1.768 1.73v4.412a1.778 1.778 0 0 0 3.555 0v-4.412a1.761 1.761 0 0 0-1.787-1.73Z"
        fill="#ff7746"
      />
      <path
        data-name="Fill 4"
        d="M28.046 10.792v2.941a8.306 8.306 0 0 0-2.236-.3h-1.32v-2.641a7.4 7.4 0 0 0-7.479-7.314 7.414 7.414 0 0 0-7.5 7.274v2.683h-1.3a7.634 7.634 0 0 0-2.256.318v-2.961A10.934 10.934 0 0 1 16.97 0a10.922 10.922 0 0 1 11.076 10.792"
        fill="#ff7746"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgComponent;
