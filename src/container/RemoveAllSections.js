import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/setups';
import Button from '../components/Button';

const mapStatetoProps = () => ({
  children: 'remove all sections',
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(sectionsActions.reset()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Button);
