import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/sections';
import Button from '../components/Button';

const mapStatetoProps = () => ({
  children: 'reset',
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(sectionsActions.reset()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Button);
