/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './gesture-handler';
import React from 'react';
import {store} from './store/store.ts';
import {Provider} from 'react-redux';

import Root from './Root.tsx';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
