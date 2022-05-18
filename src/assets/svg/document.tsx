import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42.51}
      height={50.011}
      {...props}
    >
      <path
        data-name="Fill 3"
        d="M38.281 17.556c-1.129 0-2.625-.025-4.486-.025A8.342 8.342 0 0 1 25.52 9.19V1.148A1.14 1.14 0 0 0 24.388 0H11.162A11.225 11.225 0 0 0 0 11.275v26.944a11.734 11.734 0 0 0 11.677 11.792h19.7A11.192 11.192 0 0 0 42.51 38.764V18.682a1.133 1.133 0 0 0-1.132-1.145c-1.057.008-2.325.02-3.1.02"
        fill="#ff7746"
        opacity={0.4}
      />
      <path
        data-name="Fill 1"
        d="M31.467 1.419a1.194 1.194 0 0 0-2.053.831v6.6a5.067 5.067 0 0 0 5.044 5.041c1.743.02 4.163.025 6.219.02a1.192 1.192 0 0 0 .858-2.02C38.896 9.15 34.173 4.229 31.467 1.419"
        fill="#ff7746"
        opacity={0.4}
      />
      <path
        data-name="Combined Shape"
        d="M13.688 35.964a1.863 1.863 0 0 1 0-3.725h13.613a1.863 1.863 0 0 1 0 3.725Zm0-12.49a1.862 1.862 0 1 1 0-3.723h8.464a1.861 1.861 0 1 1 0 3.722Z"
        fill="#ff7746"
      />
    </svg>
  );
}

export default SvgComponent;
