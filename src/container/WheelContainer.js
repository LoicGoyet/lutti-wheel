import React from 'react'
import { connect } from 'react-redux'

import * as sectionsActions from '../ducks/sections'
import Wheel from '../components/Wheel'

const mapStatetoProps = state => ({
    sections: state.sections
})

// const mapDispatchToProps = dispatch => ({
//     addItem: (label, color) => dispatch(sectionsActions.addItem(label, color))
// })

export default connect(mapStatetoProps)(Wheel)