import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/setups';
import Wheel from '../components/Wheel';

const mapStatetoProps = state => ({
  sections: state.setups.data,
  selectedIndex: state.setups.selectedIndex,
  selectedIndexes: state.setups.selectedIndexes,
  rotation: state.setups.rotation,
  soundOn: state.ui.soundOn,
});

const mapDispatchToProps = dispatch => ({
  updateSelectedIndex: index => dispatch(sectionsActions.updateSelectedIndex(index)),
  updateRotation: rotation => dispatch(sectionsActions.updateRotation(rotation)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Wheel);
