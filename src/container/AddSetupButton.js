import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sectionsActions from '../ducks/setups';
import AddSetupButton from '../components/AddSetupButton';

const mapStatetoProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(sectionsActions.addSetup, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(AddSetupButton);
