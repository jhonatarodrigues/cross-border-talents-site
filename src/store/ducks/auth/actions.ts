import { action } from 'typesafe-actions';
import { AuthTypes, IAuth } from './types';

export const loadRequest = () => action(AuthTypes.LOAD_REQUEST);
export const loadSuccess = (data: IAuth) =>
  action(AuthTypes.LOAD_SUCCESS, { ...data });
export const loadFailure = (data: any) =>
  action(AuthTypes.LOAD_FAILURE, { ...data });
export const loadLogout = () => action(AuthTypes.LOAD_LOGOUT);
