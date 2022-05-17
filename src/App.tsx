import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import moment from 'moment-timezone';
import Store, { persistor } from './store';

import './styles/index.css';
import Routes from './Routes';

function App() {
  moment.tz.setDefault('America/Sao_Paulo');

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
