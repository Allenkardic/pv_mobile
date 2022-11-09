import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Entry from './navigation/AppNavigator';
import {store, persistor} from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Entry />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

export default App;
