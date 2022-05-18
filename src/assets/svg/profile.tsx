import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39.994}
      height={50.011}
      {...props}
    >
      <path
        data-name="Fill 1"
        d="M20 32.945c-10.788 0-20 1.7-20 8.5s9.155 8.564 20 8.564c10.785 0 20-1.7 20-8.5s-9.158-8.564-20-8.564"
        fill="#ff7746"
      />
      <path
        data-name="Fill 4"
        d="M19.997 26.466A13.233 13.233 0 1 0 6.764 13.233a13.186 13.186 0 0 0 13.233 13.233"
        fill="#ff7746"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgComponent;
