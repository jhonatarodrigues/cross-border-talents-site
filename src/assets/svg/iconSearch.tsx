import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
      <ellipse cx={17.198} cy={17.306} rx={17.198} ry={17.306} fill="#ff7746" />
      <path
        d="M37.349 39.91a2.642 2.642 0 0 1-1.779-.77l-4.077-4.76a2.175 2.175 0 0 1-.155-3.042 1.948 1.948 0 0 1 2.775 0l5.122 4.1a2.7 2.7 0 0 1 .581 2.862 2.669 2.669 0 0 1-2.36 1.7Z"
        fill="#ff7746"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgComponent;
