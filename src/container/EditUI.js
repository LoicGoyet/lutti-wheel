import { connect } from 'react-redux';

import * as uiActions from '../ducks/ui';
import * as sectionsActions from '../ducks/setups';
import UIForm from '../components/UIForm';

const mapStatetoProps = state => ({
  streamMode: state.ui.streamMode,
  soundOn: state.ui.soundOn,
  selectedIndexes: state.setups.selectedIndexes,
});

const mapDispatchToProps = dispatch => ({
  toggleStreamMode: () => dispatch(uiActions.toggleStreamMode()),
  toggleSoundOn: () => dispatch(uiActions.toggleSoundOn()),
  resetSelectedIndexes: () => dispatch(sectionsActions.resetSelectedIndexes()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(UIForm);
