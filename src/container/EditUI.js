import { connect } from 'react-redux';

import * as uiActions from '../ducks/ui';
import UIForm from '../components/UIForm';

const mapStatetoProps = state => ({
  streamMode: state.ui.streamMode,
  soundOn: state.ui.soundOn,
});

const mapDispatchToProps = dispatch => ({
  toggleStreamMode: () => dispatch(uiActions.toggleStreamMode()),
  toggleSoundOn: () => dispatch(uiActions.toggleSoundOn()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(UIForm);
