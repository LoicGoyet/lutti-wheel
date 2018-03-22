import { connect } from 'react-redux';

import Wheel from '../components/Wheel';

const mapStatetoProps = state => ({
  sections: state.sections,
});

export default connect(mapStatetoProps)(Wheel);
