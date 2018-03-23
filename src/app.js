import React from 'react';

import './style/base';
import Panel from './components/Panel';
import WheelContainer from './container/WheelContainer';
import ListSections from './container/ListSections';
import AddSection from './container/AddSection';
import ResetSections from './container/ResetSections';

class App extends React.Component {
  render() {
    return (
      <div>
        <Panel>
          <React.Fragment>
            <ListSections />
            <AddSection />
            <ResetSections />
          </React.Fragment>
        </Panel>

        <WheelContainer />
      </div>
    );
  }
}

export default App;
