import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sectionsActions from '../ducks/setups';
import PickSetup from '../components/PickSetup';

const mapStatetoProps = state => ({
  setups: state.setups,
});

const mapDispatchToProps = dispatch => ({
  pickSetup: bindActionCreators(sectionsActions.pickSetup, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(PickSetup);
