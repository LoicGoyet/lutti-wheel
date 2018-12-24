import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/setups';
import Wheel from '../components/Wheel';

const mapStatetoProps = state => {
  const activeSetupId = state.setups.activeId;
  const activeSetup = state.setups.byId[activeSetupId];

  return {
    sections: activeSetup.data,
    selectedIndex: activeSetup.selectedIndex,
    selectedIndexes: activeSetup.selectedIndexes,
    rotation: activeSetup.rotation,
    soundOn: state.ui.soundOn,
  };
};

const mapDispatchToProps = dispatch => ({
  updateSelectedIndex: index => dispatch(sectionsActions.updateSelectedIndex(index)),
  updateRotation: rotation => dispatch(sectionsActions.updateRotation(rotation)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Wheel);
