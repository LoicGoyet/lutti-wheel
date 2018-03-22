import React from 'react';

import WheelContainer from './container/WheelContainer';
import ListSections from './container/ListSections';
import AddSection from './container/AddSection';

class App extends React.Component {
  render() {
    return (
      <div>
        <ListSections />
        <AddSection />
        <WheelContainer />
      </div>
    );
  }
}

export default App;
