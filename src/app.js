import React from 'react';

import WheelContainer from './container/WheelContainer';
import ListSections from './container/ListSections';

class App extends React.Component {
  render() {
    return (
      <div>
        <ListSections />
        <WheelContainer />
      </div>
    );
  }
}

export default App;
