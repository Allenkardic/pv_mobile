import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './navigation/AppNavigator';
import {store, persistor} from './redux';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

export default App;
