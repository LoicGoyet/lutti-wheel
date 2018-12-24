import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = props => <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Button.defaultProps = {
  onClick: void 0,
};

export default Button;

const Wrapper = styled.button`
  background-color: transparent;
  padding: 0.75em;
  font-size: 0.75em;
  font-family: inherit;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: 0;
    text-decoration: none;
  }
`;
