import { Reducer } from 'redux';
import { IAuthState, AuthTypes } from './types';

const INITIAL_STATE: IAuthState = {
  id_token: '',
  user: null,
  loading: false,
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOAD_REQUEST:
      return { loading: true };
    case AuthTypes.LOAD_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case AuthTypes.LOAD_FAILURE:
      return { ...state, loading: false, ...action.payload };
    case AuthTypes.LOAD_LOGOUT:
      return { loading: false };
    default:
      return state;
  }
};

export default auth;
