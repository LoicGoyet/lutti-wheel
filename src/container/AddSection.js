import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/sections';
import AddSectionForm from '../components/AddSectionForm';

const mapStatetoProps = (state, ownProps) => ({
  section: state.sections.data[ownProps.index],
});

const mapDispatchToProps = dispatch => ({
  addItem: (label, color) => dispatch(sectionsActions.addItem(label, color)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(AddSectionForm);
