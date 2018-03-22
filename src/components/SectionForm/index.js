import React from 'react'

const SectionForm = props => (
    <div>
        {props.section.label} / {props.section.color}
        <button onClick={() => props.removeItem()}>remove</button>
    </div>
);

export default SectionForm