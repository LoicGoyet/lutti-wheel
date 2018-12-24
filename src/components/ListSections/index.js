import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaTrashO } from 'react-icons/lib/fa';

import EditSection from '../../container/EditSection';
import AddSection from '../../container/AddSection';
import Input from '../Input';
import Button from '../Button';

const ListSections = props => (
  <Wrapper>
    <TitleRow>
      <TitleInput value={props.title} onChange={e => props.retitleSetup(e.target.value)} />

      <RemoveButton>
        <FaTrashO />
      </RemoveButton>
    </TitleRow>

    {props.sections.length > 0 &&
      props.sections.map((section, index) => <EditSection key={`${index}-${section.label}`} index={index} />)}

    <AddSection />
  </Wrapper>
);

ListSections.propTypes = {
  sections: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  retitleSetup: PropTypes.func.isRequired,
};

export default ListSections;

const Wrapper = styled.section`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const TitleRow = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const TitleInput = styled(Input)`
  flex-grow: 1;
`;

const RemoveButton = styled(Button)`
  margin-left: 0.6rem;
  background-color: rgb(230, 33, 33);
  color: rgb(255, 255, 255);
  width: 38px;

  &:hover,
  &:active {
    background-color: rgb(175, 21, 21);
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(230, 33, 33, 0.4);
  }
`;
