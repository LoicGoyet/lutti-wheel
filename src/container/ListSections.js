import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListSections from '../components/ListSections';
import * as sectionsActions from '../ducks/setups';

const mapStatetoProps = state => {
  const activeSetupId = state.setups.activeId;
  const activeSetup = state.setups.byId[activeSetupId];

  return {
    title: activeSetup.title,
    sections: activeSetup.data,
    hasSeveralSetups: state.setups.allIds.length > 1,
  };
};

const mapDispatchToProps = dispatch => ({
  retitleSetup: bindActionCreators(sectionsActions.retitleSetup, dispatch),
  removeActiveSetup: bindActionCreators(sectionsActions.removeActiveSetup, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(ListSections);
