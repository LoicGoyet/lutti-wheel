import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/setups';
import EditSectionForm from '../components/EditSectionForm';

const mapStatetoProps = (state, ownProps) => {
  const activeSetupId = state.setups.activeId;
  const activeSetup = state.setups.byId[activeSetupId];

  return {
    section: activeSetup.data[ownProps.index],
    sectionsLength: activeSetup.data.length,
    disabled: activeSetup.selectedIndexes.indexOf(ownProps.index) >= 0,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(sectionsActions.removeItem(ownProps.index)),
  editItem: item => dispatch(sectionsActions.editItem(ownProps.index, item)),
  toogleItemSelection: () => dispatch(sectionsActions.toogleItemSelection(ownProps.index)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(EditSectionForm);
