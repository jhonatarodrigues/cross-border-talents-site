/* eslint-disable no-underscore-dangle */
import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { useQuery } from 'react-query';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { IAuth } from './types';

interface IParams extends AnyAction {
  username: string;
  password: string;
}

const QueryLogin = `
mutation {
  login(email:"teste@teste.com", password: "123456"){
    user{
      name
      email
    }
    token
    refreshToken
  }
}`;

export function* load({ username, password }: IParams) {
  console.log('username', username, password);
  try {
    const response: IAuth = yield call(api.post, '/', {
      query: QueryLogin,
    });

    console.log('response ---', response);

    // .post('/', {
    //   data: {
    //     query: '',
    //   },
    // })
    // .then(response => response.data.data);

    // const response: IAuth = yield call(
    //   api.post,
    //   '/api/v1/authentications/backoffice',
    //   {
    //     username,
    //     password,
    //   },
    // );

    console.log('aaaa ---');

    // yield put(loadSuccess(res));

    // yield put(loadFailure({ error: true }));
  } catch (err: any) {
    console.log('error --', err);
    let json = {};
    if (err && err.response) {
      json = JSON.parse(err.response.request.response);
    }

    yield put(loadFailure({ error: true, json }));
  }
}
