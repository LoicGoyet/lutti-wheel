import React from 'react';
import PropTypes from 'prop-types';

import EditSection from '../../container/EditSection';

const EditList = props => (
  <section>
    {props.sections.length > 0 &&
      props.sections.map((section, index) => <EditSection key={`${section.label}`} index={index} />)}
  </section>
);

EditList.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default EditList;
