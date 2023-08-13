/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import AuthRoutes from './screen/authRoutes';
import { Provider } from 'react-redux';
import store from './screen/home/redux/store/store';

console.disableYellowBox=true;

export default function App() {
  return (
    <Provider store={store}>
      <AuthRoutes />
    </Provider>
  )
}
