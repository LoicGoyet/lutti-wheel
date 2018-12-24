import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainBackground = props => <Wrapper streamMode={props.streamMode}>{props.children}</Wrapper>;

MainBackground.propTypes = {
  children: PropTypes.node.isRequired,
  streamMode: PropTypes.bool,
};

MainBackground.defaultProps = {
  streamMode: false,
};

export default MainBackground;

const Wrapper = styled.main`
  background-color: ${props => (props.streamMode ? '#00FF00' : '#292044')};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
