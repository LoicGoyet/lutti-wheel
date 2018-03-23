import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button onClick={props.onClick}>{props.children}</button>;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Button.defaultProps = {
  onClick: void 0,
};

export default Button;
