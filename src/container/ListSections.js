import { connect } from 'react-redux';

import ListSections from '../components/ListSections';

const mapStatetoProps = state => ({
  sections: state.setups.data,
});

export default connect(mapStatetoProps)(ListSections);
