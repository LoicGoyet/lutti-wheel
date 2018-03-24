import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TiCogOutline from 'react-icons/lib/ti/cog-outline';

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
        <Trigger onClick={this.toggleOpen}>
          <TiCogOutline />
        </Trigger>
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
  background-color: #fff;
  transition: transform 300ms ease-in-out;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-200px)')};
  z-index: 100;
`;

const Trigger = styled.button`
  position: absolute;
  left: 100%;
  top: 10px;
  background-color: #fff;
  display: inline-flex;
  font-size: 22px;
  padding: 10px 15px 10px 10px;
  border: 0;
  border-radius: 0 20px 20px 0;
  cursor: pointer;

  &:hover {
    background-color: rgb(235, 235, 235);
  }

  &:focus {
    outline: 0;
  }
`;
