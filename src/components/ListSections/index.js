import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EditSection from '../../container/EditSection';
import AddSection from '../../container/AddSection';

const ListSections = props => (
  <Wrapper>
    {props.sections.length > 0 &&
      props.sections.map((section, index) => <EditSection key={`${index}-${section.label}`} index={index} />)}

    <AddSection />
  </Wrapper>
);

ListSections.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default ListSections;

const Wrapper = styled.section`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;
