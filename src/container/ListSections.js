import { connect } from 'react-redux';

import EditList from '../components/EditList';

const mapStatetoProps = state => ({
  sections: state.sections.data,
});

export default connect(mapStatetoProps)(EditList);
