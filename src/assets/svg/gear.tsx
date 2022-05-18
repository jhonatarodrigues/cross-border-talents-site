import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={28.5} height={30} {...props}>
      <path
        d="M14.269 19.245a4.28 4.28 0 0 1-4.354-4.23 4.292 4.292 0 0 1 4.354-4.245 4.238 4.238 0 1 1 0 8.475"
        fill="#ff7746"
      />
      <path
        data-name="Path"
        d="M28.1 18.555a3.453 3.453 0 0 0-1.242-1.185 2.321 2.321 0 0 1-.95-.96 2.733 2.733 0 0 1 .981-3.75 3.041 3.041 0 0 0 1.134-4.245l-1.027-1.77a3.169 3.169 0 0 0-4.308-1.14 2.96 2.96 0 0 1-3.867-1.035 2.319 2.319 0 0 1-.353-1.32 2.668 2.668 0 0 0-.414-1.59A3.228 3.228 0 0 0 15.326 0h-2.162a3.292 3.292 0 0 0-2.713 1.56 2.677 2.677 0 0 0-.429 1.59 2.319 2.319 0 0 1-.353 1.32 2.945 2.945 0 0 1-3.847 1.035A3.187 3.187 0 0 0 1.5 6.645L.472 8.415a3.066 3.066 0 0 0 1.134 4.245 2.751 2.751 0 0 1 1 3.75 2.451 2.451 0 0 1-.966.96 3.177 3.177 0 0 0-1.23 1.185 2.992 2.992 0 0 0 .031 3.075l1.059 1.8a3.2 3.2 0 0 0 2.729 1.56 3.242 3.242 0 0 0 1.625-.45 2.379 2.379 0 0 1 1.346-.345 2.838 2.838 0 0 1 2.821 2.73A3.105 3.105 0 0 0 13.21 30h2.09a3.1 3.1 0 0 0 3.173-3.075 2.863 2.863 0 0 1 2.836-2.73 2.445 2.445 0 0 1 1.349.345 3.146 3.146 0 0 0 4.338-1.11l1.073-1.8a3.027 3.027 0 0 0 .031-3.075"
        fill="#ff7746"
        opacity={0.4}
      />
    </svg>
  );
}

export default SvgComponent;
