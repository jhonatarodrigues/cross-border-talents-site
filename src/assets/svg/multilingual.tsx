import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 30.083}
      height={props.height || 30}
      {...props}
    >
      <path
        data-name="Fill 1"
        d="M15.072 0A15.031 15.031 0 0 0 0 15.023a15.848 15.848 0 0 0 2.031 7.5 1.569 1.569 0 0 1 .105 1.352l-1.008 3.361a.938.938 0 0 0 1.233 1.172l3.038-.9a2.566 2.566 0 0 1 2.243.541A15.008 15.008 0 1 0 15.072 0"
        fill="#ff7746"
        opacity={0.4}
      />
      <path
        data-name="Combined Shape"
        d="M20.021 15.038a1.925 1.925 0 1 1 1.925 1.924 1.918 1.918 0 0 1-1.925-1.924Zm-6.934-.015a1.925 1.925 0 1 1 1.925 1.939 1.942 1.942 0 0 1-1.925-1.939Zm-6.935.015a1.925 1.925 0 0 1 3.85 0 1.939 1.939 0 0 1-1.925 1.924 1.938 1.938 0 0 1-1.925-1.924Z"
        fill="#ff7746"
      />
    </svg>
  );
}

export default SvgComponent;
