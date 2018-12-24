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
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.2), inset 0 0 14px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.2), inset 0 0 14px rgba(0, 0, 0, 0.5);
  }
`;
