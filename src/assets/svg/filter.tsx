import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={26.667}
      {...props}
    >
      <path
        data-name="Fill 1"
        d="M12.125 19.437H2.262A2.243 2.243 0 0 0 0 21.659a2.244 2.244 0 0 0 2.262 2.222h9.863a2.244 2.244 0 0 0 2.262-2.222 2.243 2.243 0 0 0-2.262-2.222"
        fill="#ff7746"
        opacity={0.4}
      />
      <path
        data-name="Fill 4"
        d="M30 5.067a2.242 2.242 0 0 0-2.26-2.22h-9.863a2.243 2.243 0 0 0-2.262 2.22 2.243 2.243 0 0 0 2.262 2.222h9.863A2.243 2.243 0 0 0 30 5.067"
        fill="#ff7746"
        opacity={0.4}
      />
      <path
        data-name="Fill 6"
        d="M10.317 5.068a5.114 5.114 0 0 1-5.158 5.069A5.115 5.115 0 0 1 0 5.068 5.114 5.114 0 0 1 5.158 0a5.113 5.113 0 0 1 5.158 5.068"
        fill="#ff7746"
      />
      <path
        data-name="Fill 9"
        d="M30 21.598a5.113 5.113 0 0 1-5.158 5.068 5.114 5.114 0 0 1-5.159-5.068 5.115 5.115 0 0 1 5.158-5.069 5.114 5.114 0 0 1 5.158 5.069"
        fill="#ff7746"
      />
    </svg>
  );
}

export default SvgComponent;
