import { connect } from 'react-redux';

import EditList from '../components/EditList';

const mapStatetoProps = state => ({
  sections: state.sections,
});

export default connect(mapStatetoProps)(EditList);
