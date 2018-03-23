import { connect } from 'react-redux';

import * as sectionsActions from '../ducks/sections';
import AddSectionForm from '../components/AddSectionForm';

const defaultColors = [
  '#0c3953',
  '#0E147A',
  '#117BA1',
  '#189CC5',
  '#5CB09B',
  '#AAC26D',
  '#F1D241',
  '#F1B435',
  '#F59129',
  '#F56D20',
  '#E24D1C',
  '#CA2B1A',
];

const mapStatetoProps = (state, ownProps) => ({
  section: state.sections.data[ownProps.index],
  defaultColor: defaultColors[state.sections.data.length % defaultColors.length],
});

const mapDispatchToProps = dispatch => ({
  addItem: (label, color) => dispatch(sectionsActions.addItem(label, color)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(AddSectionForm);
