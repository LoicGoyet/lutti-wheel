import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/sections';
import EditSectionForm from '../components/EditSectionForm';

const mapStatetoProps = (state, ownProps) => ({
  section: state.sections.data[ownProps.index],
  sectionsLength: state.sections.data.length,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(sectionsActions.removeItem(ownProps.index)),
  editItem: item => dispatch(sectionsActions.editItem(ownProps.index, item)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(EditSectionForm);
