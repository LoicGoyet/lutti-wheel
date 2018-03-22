import React from 'react';
import PropTypes from 'prop-types';

const SectionForm = props => (
  <div>
    {props.section.label} / {props.section.color}
    <button onClick={() => props.removeItem()}>remove</button>
  </div>
);

SectionForm.propTypes = {
  section: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default SectionForm;
