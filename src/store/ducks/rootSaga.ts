import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { load } from './auth/sagas';

export default function* rootSaga(): any {
  return yield all([takeLatest(AuthTypes.LOAD_REQUEST, load)]);
}
