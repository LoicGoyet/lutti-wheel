import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaCheck from 'react-icons/lib/fa/check';

const Checkbox = props => (
  <Wrapper>
    <FakeInput onClick={props.onchange} checked={props.checked}>
      {props.checked === true && <FaCheck />}
    </FakeInput>

    <Input type="checkbox" readOnly checked={props.checked} />
  </Wrapper>
);

Checkbox.propTypes = {
  onchange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const FakeInput = styled.button`
  height: 30px;
  width: 30px;
  border: 1px solid rgb(151, 151, 151);
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1em;

  &:focus {
    outline: 0;
  }
`;

const Input = styled.input`
  display: none;
`;
