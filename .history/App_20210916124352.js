import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
import { store } from './Store/store'
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}