import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={45.01}
      height={50.011}
      {...props}
    >
      <path
        d="M32.985 0H12.028C4.426 0 0 4.451 0 12.078v25.831c0 7.752 4.426 12.1 12.028 12.1h20.957c7.724 0 12.025-4.351 12.025-12.1V12.078C45.01 4.451 40.709 0 32.985 0"
        fill="#ff7746"
        opacity={0.4}
      />
      <path
        data-name="Combined Shape"
        d="M10.828 37.382a1.994 1.994 0 0 1 0-2.1 1.963 1.963 0 0 1 1.877-.925h19.6a1.975 1.975 0 0 1 0 3.925H12.704a1.83 1.83 0 0 1-.244.016 1.959 1.959 0 0 1-1.632-.916Zm1.876-10.526a1.952 1.952 0 0 1 0-3.9h19.6a1.952 1.952 0 0 1 0 3.9Zm0-11.3a1.95 1.95 0 1 1 0-3.9v-.029h7.474a1.962 1.962 0 0 1 0 3.925Z"
        fill="#ff7746"
      />
    </svg>
  );
}

export default SvgComponent;
