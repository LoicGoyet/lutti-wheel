import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/setups';
import EditSectionForm from '../components/EditSectionForm';

const mapStatetoProps = (state, ownProps) => ({
  section: state.setups.data[ownProps.index],
  sectionsLength: state.setups.data.length,
  disabled: state.setups.selectedIndexes.indexOf(ownProps.index) >= 0,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(sectionsActions.removeItem(ownProps.index)),
  editItem: item => dispatch(sectionsActions.editItem(ownProps.index, item)),
  toogleItemSelection: () => dispatch(sectionsActions.toogleItemSelection(ownProps.index)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(EditSectionForm);
