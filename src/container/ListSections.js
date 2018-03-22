import React from 'react'
import { connect } from 'react-redux'

import * as sectionsActions from "../ducks/sections";
import EditList from "../components/EditList";

const mapStatetoProps = state => ({
  sections: state.sections
});

export default connect(mapStatetoProps)(EditList);