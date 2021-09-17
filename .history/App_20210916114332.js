import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import { store } from './Store/store'

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}