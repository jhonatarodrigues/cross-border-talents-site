import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42.51}
      height={42.508}
      {...props}
    >
      <path
        data-name="Combined Shape"
        d="M13.688 35.964a1.863 1.863 0 0 1 0-3.725h13.613a1.863 1.863 0 0 1 0 3.725Zm0-12.49a1.862 1.862 0 1 1 0-3.723h8.464a1.861 1.861 0 1 1 0 3.722Z"
        fill="#ff7746"
      />
      <g fill="#ff7746">
        <path
          data-name="Folder 2"
          d="M31.635 6.62H25.38a5.163 5.163 0 0 1-4.025-1.886l-2.06-2.848A5.031 5.031 0 0 0 15.288 0h-4.422C2.929 0 0 4.659 0 12.58v8.562c-.01.942 42.5.94 42.5 0v-2.49c.039-7.92-2.815-12.032-10.865-12.032Z"
          opacity={0.4}
        />
        <path
          data-name="Folder"
          d="M30.534 42.508c-.219 0-.44-.006-.658-.017h-17.27c-.216.011-.435.017-.652.017a12.788 12.788 0 0 1-8.647-3.354 9.537 9.537 0 0 1-1.417-1.887 12.333 12.333 0 0 1-1.662-4.64A17.317 17.317 0 0 1 0 29.817V18.654a25.81 25.81 0 0 1 .151-2.793 5.09 5.09 0 0 1 .084-.474 4.026 4.026 0 0 0 .105-.789 11.942 11.942 0 0 1 1.039-3.225c1.5-3.2 4.588-4.753 9.449-4.753h20.787c.285-.022.571-.033.855-.033a11.14 11.14 0 0 1 6.856 2.372 5.908 5.908 0 0 1 .7.7 8.363 8.363 0 0 1 1.549 2.7 18.087 18.087 0 0 1 .926 6.3v11.158a20.066 20.066 0 0 1-.208 2.81 12.67 12.67 0 0 1-1.7 4.641 9.448 9.448 0 0 1-1.437 1.886 12.716 12.716 0 0 1-8.622 3.354ZM10.565 25.272a1.754 1.754 0 1 0 0 3.508H32.072a1.755 1.755 0 0 0 1.754-1.7 1.578 1.578 0 0 0-.377-1.132 1.675 1.675 0 0 0-1.324-.679Z"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;