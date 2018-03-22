import React from 'react';
import styled from 'styled-components';

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
