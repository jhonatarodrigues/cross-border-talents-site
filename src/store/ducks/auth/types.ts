/* eslint-disable camelcase */
// -- Action types
// eslint-disable-next-line no-shadow
export enum AuthTypes {
  'LOAD_REQUEST' = '@auth/LOAD_REQUEST',
  'LOAD_SUCCESS' = '@auth/LOAD_SUCCESS',
  'LOAD_FAILURE' = '@auth/LOAD_FAILURE',
  'LOAD_LOGOUT' = '@auth/LOAD_LOGOUT',
}

// -- Data Types
export interface IAuth {
  id_token: string;
  user: any;
}
// -- State Type
export interface IAuthState extends IAuth {
  loading: boolean;
}
