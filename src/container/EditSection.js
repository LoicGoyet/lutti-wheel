import React from "react";
import { connect } from "react-redux";

import * as sectionsActions from "../ducks/sections";
import SectionForm from "../components/SectionForm";

const mapStatetoProps = (state, ownProps) => ({
  section: state.sections[ownProps.index],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(sectionsActions.removeItem(ownProps.index))
});

export default connect(mapStatetoProps, mapDispatchToProps)(SectionForm);
