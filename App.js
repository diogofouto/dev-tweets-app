import React from 'react';
import Navigator from './src/components/Navigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return <Provider store={store}>
      <Navigator/>
    </Provider>
}

export default App;