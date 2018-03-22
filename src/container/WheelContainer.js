import React from 'react'
import { connect } from 'react-redux'

import * as sectionsActions from '../ducks/sections'
import Wheel from '../components/Wheel'

const mapStatetoProps = state => ({
    sections: state.sections
})


export default connect(mapStatetoProps)(Wheel)