import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42.512}
      height={50}
      {...props}
    >
      <g data-name="Group 197">
        <path
          data-name="Subtraction 5"
          d="M31.511 50H11a10.929 10.929 0 0 1-7.777-3.221 10.929 10.929 0 0 1-3.222-7.777v-28a10.933 10.933 0 0 1 3.222-7.78A10.927 10.927 0 0 1 11 0h16v8a7.008 7.008 0 0 0 7 7h8c.172 0 .343-.006.509-.018v24.019a10.929 10.929 0 0 1-3.222 7.777A10.929 10.929 0 0 1 31.511 50Z"
          fill="rgba(255,119,70,0.4)"
        />
        <g
          data-name="Group 195"
          transform="translate(-170.05 -1152)"
          fill="#ff7746"
        >
          <rect
            data-name="Rectangle 83"
            width={3}
            height={16.9}
            rx={1.5}
            transform="translate(190 1169)"
          />
          <rect
            data-name="Rectangle 84"
            width={3}
            height={16.9}
            rx={1.5}
            transform="rotate(90 -488 687.95)"
          />
        </g>
        <path
          data-name="Subtraction 6"
          d="M42.512 12.815H34.7a5.006 5.006 0 0 1-5-5V.001l12.812 12.813Z"
          fill="rgba(255,119,70,0.4)"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
