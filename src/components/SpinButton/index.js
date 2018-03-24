import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpinButton = props => (
  <Button innerRef={props.reference} onClick={props.onClick}>
    SPIN
  </Button>
);

SpinButton.propTypes = {
  reference: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

SpinButton.defaultProps = {
  reference: undefined,
};

export default SpinButton;

const Button = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: rgb(200, 200, 200);
  border: 3px solid;
  font-size: 1.2rem;
  font-weight: bold;
  transition: box-shadow 200ms ease-in-out;
  font-family: inherit;
  background-color: #fff;

  &:hover {
    box-shadow: inset 0px 2px 7px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 0;
    box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.5);
  }
`;
