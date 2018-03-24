import React from 'react';

import './style/base';
import Main from './container/Main';
import Panel from './components/Panel';
import WheelContainer from './container/WheelContainer';
import ListSections from './container/ListSections';
import AddSection from './container/AddSection';
import ResetSections from './container/ResetSections';
import EditUI from './container/EditUI';

class App extends React.Component {
  render() {
    return (
      <Main>
        <EditUI />
        <Panel>
          <React.Fragment>
            <ListSections />
            <AddSection />
            <ResetSections />
          </React.Fragment>
        </Panel>

        <WheelContainer />
      </Main>
    );
  }
}

export default App;
