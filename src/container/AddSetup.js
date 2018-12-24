import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sectionsActions from '../ducks/setups';
import Button from '../components/Button';

const mapStatetoProps = () => ({
  children: 'Add section',
});

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(sectionsActions.addSetup, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Button);
