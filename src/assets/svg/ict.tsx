import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26.667}
      height={26.667}
      {...props}
    >
      <path
        data-name="Fill 1"
        d="M20.077 25.775a1.844 1.844 0 0 0 .088-1.831l-1-1.976a2.158 2.158 0 0 0-1.942-1.184H9.445a2.163 2.163 0 0 0-1.942 1.184l-1 1.975a1.829 1.829 0 0 0-.2.841 1.865 1.865 0 0 0 .288.991 1.9 1.9 0 0 0 1.624.892h10.236a1.909 1.909 0 0 0 1.626-.892"
        fill="#ff7746"
      />
      <path
        data-name="Fill 1"
        d="M5.929 18.667A5.99 5.99 0 0 1 0 12.634V6.019A5.975 5.975 0 0 1 5.916 0h14.821a5.989 5.989 0 0 1 5.929 6.034v6.612a5.975 5.975 0 0 1-5.915 6.021H5.929Z"
        fill="#ff7746"
        opacity={0.4}
      />
      <path
        data-name="Fill 4"
        d="M16.836 6.214a1.11 1.11 0 0 0-1.114-1.1H6.56a1.108 1.108 0 0 0 0 2.216h9.162a1.113 1.113 0 0 0 1.114-1.116"
        fill="#ff7746"
      />
      <path
        data-name="Fill 6"
        d="M21.209 12.436a1.11 1.11 0 0 0-1.114-1.1H6.56a1.108 1.108 0 0 0 0 2.216h13.535a1.113 1.113 0 0 0 1.114-1.116"
        fill="#ff7746"
      />
    </svg>
  );
}

export default SvgComponent;
