import { connect } from 'react-redux';

import ListSections from '../components/ListSections';

const mapStatetoProps = state => {
  const activeSetupId = state.setups.activeId;
  const activeSetup = state.setups.byId[activeSetupId];

  return {
    sections: activeSetup.data,
  };
};

export default connect(mapStatetoProps)(ListSections);
