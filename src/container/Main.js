import { connect } from 'react-redux';

import MainBackground from '../components/MainBackground';

const mapStatetoProps = state => ({
  streamMode: state.ui.streamMode,
});

export default connect(mapStatetoProps)(MainBackground);
