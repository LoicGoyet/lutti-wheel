import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/lib/fa';

const SelectActiveSetup = ({ setups, selectActiveSetup }) => {
  const onChange = e => {
    const id = parseInt(e.target.value);
    return selectActiveSetup(id);
  };

  return (
    <Wrapper>
      <Select onChange={onChange} value={setups.activeId}>
        {setups.allIds.map(setupId => {
          const setup = setups.byId[setupId];

          return (
            <option value={setupId} key={setupId}>
              {setup.title}
            </option>
          );
        })}
      </Select>
      <Caret />
    </Wrapper>
  );
};

SelectActiveSetup.propTypes = {
  setups: PropTypes.object.isRequired,
  selectActiveSetup: PropTypes.func.isRequired,
};

export default SelectActiveSetup;

const Select = styled.select`
  display: inline-block;
  width: 100%;
  height: 2.375rem;
  appearance: none;
  border: 1px solid rgb(187, 187, 187);
  padding: 0 15px;
  border-radius: 3px;
  background-color: rgb(255, 255, 255);

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Caret = styled(FaCaretDown).attrs({
  size: 14,
})`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(0, 0, 0);
`;
