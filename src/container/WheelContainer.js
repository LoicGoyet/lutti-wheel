import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/sections';
import Wheel from '../components/Wheel';

const mapStatetoProps = state => ({
  sections: state.sections.data,
  selectedIndex: state.sections.selectedIndex,
  selectedIndexes: state.sections.selectedIndexes,
  rotation: state.sections.rotation,
  soundOn: state.ui.soundOn,
});

const mapDispatchToProps = dispatch => ({
  updateSelectedIndex: index => dispatch(sectionsActions.updateSelectedIndex(index)),
  resetSelectedIndexes: () => dispatch(sectionsActions.resetSelectedIndexes()),
  updateRotation: rotation => dispatch(sectionsActions.updateRotation(rotation)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Wheel);
