import React, {type PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Entry from './navigation/AppNavigator';
import {store, persistor} from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Entry />
      </PersistGate>
    </Provider>
  );
};

export default App;
