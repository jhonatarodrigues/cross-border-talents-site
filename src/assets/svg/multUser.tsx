import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={55.526}
      height={46}
      {...props}
    >
      <g data-name="Group 199" transform="translate(-165 -986)">
        <ellipse
          data-name="Ellipse 24"
          cx={11.463}
          cy={11.226}
          rx={11.463}
          ry={11.226}
          transform="translate(173.651 986)"
          fill="rgba(255,119,70,0.4)"
        />
        <ellipse
          data-name="Ellipse 25"
          cx={20.5}
          cy={9}
          rx={20.5}
          ry={9}
          transform="translate(165 1014)"
          fill="#ff7746"
        />
        <path
          data-name="Subtraction 9"
          d="M197.289 1007.389h-.122a12.443 12.443 0 0 0 2.827-4.293 14.961 14.961 0 0 0 1.055-5.596 13.541 13.541 0 0 0-4.472-10.416c.244-.016.482-.023.711-.023a10.43 10.43 0 0 1 7.339 2.976 9.992 9.992 0 0 1 3.038 7.188 9.99 9.99 0 0 1-3.038 7.186 10.424 10.424 0 0 1-7.338 2.978Z"
          fill="rgba(255,119,70,0.4)"
        />
        <path
          data-name="Subtraction 7"
          d="M208.549 1027.555a6.272 6.272 0 0 0 1.847-3.988c.108-2.07-.98-4.125-3.146-5.943a22.5 22.5 0 0 0-8.667-4.14c.785.008 1.57.033 2.336.073a42.216 42.216 0 0 1 13.754 2.81 13.64 13.64 0 0 1 4.083 2.483 3.737 3.737 0 0 1 1.397 2.851c-.072 1.377-1.227 2.656-3.34 3.7a26.118 26.118 0 0 1-8.262 2.153Z"
          fill="#ff7746"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
