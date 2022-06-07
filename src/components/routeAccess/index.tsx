import * as React from 'react';
import { Navigate } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  accessLevel?: number[];
  authAccessLevel?: number;
}

export default function RouteAccess({
  children,
  accessLevel,
  authAccessLevel,
}: IProps): JSX.Element {
  if (
    accessLevel &&
    authAccessLevel &&
    !accessLevel.includes(authAccessLevel)
  ) {
    return <Navigate replace to="/access-denied" />;
  }

  return children as JSX.Element;
}
RouteAccess.defaultProps = {
  accessLevel: [],
  authAccessLevel: 0,
};
