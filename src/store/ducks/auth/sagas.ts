/* eslint-disable no-underscore-dangle */
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { AxiosResponse } from 'axios';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { IAuth } from './types';

interface IParams extends AnyAction {
  username: string;
  password: string;
}

interface IReturn {
  data?: {
    login: IAuth;
  };
  errors?: {
    message: string;
  }[];
}

export function* load({ username, password }: IParams) {
  const QueryLogin = `
    mutation {
      login(email:"${username}", password: "${password}") {
        user{
          name
          email
        }
        token
        refreshToken
      }
    }`;
  try {
    const response: AxiosResponse<IReturn> = yield call(api.post, '/', {
      query: QueryLogin,
    });

    if (response.data.data?.login) {
      yield put(loadSuccess(response.data.data.login));
    } else {
      yield put(
        loadFailure({
          error: true,
          message: response.data.errors?.[0].message,
        }),
      );
    }
  } catch (err: any) {
    yield put(loadFailure({ error: true, err }));
  }
}
