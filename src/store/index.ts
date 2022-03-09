import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './ducks/rootReducers';
import rootSaga from './ducks/rootSaga';

// -- types
import { IAuthState } from './ducks/auth/types';

export interface ApplicationState {
  auth: IAuthState;
}

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  whitelist: ['auth'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
