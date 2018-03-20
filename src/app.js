import React from 'react'
import styled from 'styled-components'

import Wheel from './components/Wheel'

class App extends React.Component {
    render () {
        const sections = [{
            label: "zero",
            color: "green"
        }, {
            label: "one",
            color: "orange"
        }, {
            label: "two",
            color: "yellow"
        }, {
            label: "three",
            color: "blue"
        }, {
            label: "four",
            color: "pink"
        }];

        return <div><Wheel sections={sections}/></div>;
    }
}


export default App