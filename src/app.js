import React from 'react';
import { Provider } from 'react-redux';

import './style/base';
import Main from './container/Main';
import WheelContainer from './container/WheelContainer';
import Settings from './components/Settings';
import EditUI from './container/EditUI';
import { loadDataFromFirebase } from './utils/api';
import store from './store';

class App extends React.Component {
  componentDidMount = () => loadDataFromFirebase(store);

  render = () => (
    <Provider store={store}>
      <Main>
        <EditUI />
        <Settings />
        <WheelContainer />
      </Main>
    </Provider>
  );
}

export default App;
