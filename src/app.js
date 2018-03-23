import React from 'react';

import WheelContainer from './container/WheelContainer';
import ListSections from './container/ListSections';
import AddSection from './container/AddSection';
import ResetSections from './container/ResetSections';

class App extends React.Component {
  render() {
    return (
      <div>
        <ListSections />
        <AddSection />
        <ResetSections />
        <WheelContainer />
      </div>
    );
  }
}

export default App;
