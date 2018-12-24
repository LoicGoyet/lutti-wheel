import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/sections';
import EditSectionForm from '../components/EditSectionForm';

const mapStatetoProps = (state, ownProps) => ({
  section: state.sections.data[ownProps.index],
  sectionsLength: state.sections.data.length,
  disabled: state.sections.selectedIndexes.indexOf(ownProps.index) >= 0,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(sectionsActions.removeItem(ownProps.index)),
  editItem: item => dispatch(sectionsActions.editItem(ownProps.index, item)),
  toogleItemSelection: () => dispatch(sectionsActions.toogleItemSelection(ownProps.index)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(EditSectionForm);
