import React from 'react';
import styled from 'styled-components';

const Input = props => <Wrapper type="text" {...props} />;

export default Input;

const Wrapper = styled.input`
  padding: 0;
  border: 0;
  padding: 0 15px;
  height: 38px;
  font-size: 14px;
  border: 1px solid rgb(43, 31, 67);
  position: relative;
  border-radius: 3px;

  &:focus {
    outline: 0;
  }
`;
