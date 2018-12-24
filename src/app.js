import React from 'react';

import './style/base';
import Main from './container/Main';
import WheelContainer from './container/WheelContainer';
import Settings from './components/Settings';
import EditUI from './container/EditUI';

class App extends React.Component {
  render() {
    return (
      <Main>
        <EditUI />
        <Settings />
        <WheelContainer />
      </Main>
    );
  }
}

export default App;
