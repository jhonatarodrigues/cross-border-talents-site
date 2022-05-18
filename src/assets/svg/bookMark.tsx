import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={21.6} height={27} {...props}>
      <path
        data-name="Bookmark 2"
        d="m10.788 22.439-8.764 4.378a1.376 1.376 0 0 1-1.858-.54 1.472 1.472 0 0 1-.166-.67v-9.8c0 .971.548 1.571 1.989 2.243Z"
        fill="#ff7746"
        opacity={0.4}
      />
      <path
        d="M20.223 27a1.366 1.366 0 0 1-.683-.184l-8.752-4.378-8.8-4.389C.539 17.374 0 16.766 0 15.807V5.121A4.484 4.484 0 0 1 1.938 1.18 8.3 8.3 0 0 1 6.608 0h8.335a8.353 8.353 0 0 1 4.686 1.18A4.535 4.535 0 0 1 21.6 5.121V25.6a1.438 1.438 0 0 1-.166.66 1.381 1.381 0 0 1-.831.682 1.367 1.367 0 0 1-.38.058ZM5.7 8.155a1.067 1.067 0 0 0 0 2.135h10.161a1.067 1.067 0 0 0 0-2.135Z"
        fill="#ff7746"
      />
    </svg>
  );
}

export default SvgComponent;
