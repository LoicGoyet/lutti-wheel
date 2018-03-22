import React from 'react';

import EditSection from '../../container/EditSection';

const EditList = props => (
  <section>
    {props.sections.length > 0 && props.sections.map((section, index) => <EditSection key={index} index={index} />)}
  </section>
);

export default EditList;
