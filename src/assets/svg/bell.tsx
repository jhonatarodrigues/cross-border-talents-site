import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.124}
      height={19.569}
      {...props}
    >
      <path
        d="M9.785 1.223v.734a6.119 6.119 0 0 1 4.892 5.993v.719a7.349 7.349 0 0 0 1.854 4.877l.283.317A1.223 1.223 0 0 1 15.9 15.9H1.223a1.224 1.224 0 0 1-.914-2.037l.283-.317a7.341 7.341 0 0 0 1.854-4.878V7.95a6.085 6.085 0 0 1 4.893-5.993v-.734a1.223 1.223 0 0 1 2.446 0ZM8.562 19.569a2.447 2.447 0 0 1-1.731-.715 2.508 2.508 0 0 1-.715-1.731h4.892a2.44 2.44 0 0 1-2.446 2.446Z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
