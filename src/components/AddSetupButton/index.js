import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const AddSetupButton = props => <Wrapper {...props}>Create a new Setup</Wrapper>;

export default AddSetupButton;

const Wrapper = styled(Button)`
  display: block;
  width: 100%;
  background-color: rgb(41, 31, 69);
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.1em;

  &:hover,
  &:active {
    background-color: rgb(42, 28, 80);
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(42, 28, 80, 0.4);
  }
`;
