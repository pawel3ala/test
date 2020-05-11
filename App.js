import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import configureStore from './store'
import { PersistGate } from 'redux-persist/es/integration/react';
import SubNavigator from './navigation/SubNavigator';

export default function App() {

  const { persistor, store } = configureStore()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SubNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}