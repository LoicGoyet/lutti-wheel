import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sectionsActions from '../ducks/setups';
import SelectActiveSetup from '../components/SelectActiveSetup';

const mapStatetoProps = state => ({
  setups: state.setups,
});

const mapDispatchToProps = dispatch => ({
  selectActiveSetup: bindActionCreators(sectionsActions.selectActiveSetup, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SelectActiveSetup);
