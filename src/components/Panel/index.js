import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Panel extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  state = {
    isOpen: false,
  };

  toggleOpen() {
    return this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Wrapper isOpen={this.state.isOpen}>
        <Trigger onClick={this.toggleOpen}>settings</Trigger>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Panel;

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #2a1f43;
  transition: transform 300ms ease-in-out;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-200px)')};
  z-index: 100;
`;

const Trigger = styled.button`
  position: absolute;
  left: 100%;
  top: 10px;
`;
