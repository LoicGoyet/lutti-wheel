import React from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';

import WheelSection from '../WheelSection';
import RollingSound from '../../sounds/rolling.mp3';

class Wheel extends React.Component {
  constructor(props) {
    super(props);

    this.shuffleSection = this.shuffleSection.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      selectedIndex: 0,
      selectedIndexes: [],
      rotation: 0,
      playSound: Sound.status.STOPPED,
    };
  }

  shuffleSection() {
    const previousSelectedIndex = this.state.selectedIndex;
    const possibleSections = this.props.sections.filter(
      (section, index) => !this.state.selectedIndexes.includes(index)
    );

    const selectedSection = possibleSections[Math.floor(Math.random() * Math.floor(possibleSections.length))];
    const selectedIndex = this.props.sections.indexOf(selectedSection);

    const newRotation = this.state.rotation + this.props.turnsByShuffle * 360;
    const rotation = newRotation + (selectedIndex - previousSelectedIndex) * (360 / this.props.sections.length);

    this.setState(
      {
        selectedIndex,
        rotation,
        selectedIndexes: [...this.state.selectedIndexes, selectedIndex],
        playSound: Sound.status.PLAYING,
      },
      () => {
        setTimeout(() => {
          console.log('hello world !');
          this.setState({ playSound: Sound.status.STOPPED });
        }, 10000);
      }
    );
  }

  reset() {
    this.setState({
      selectedIndexes: [],
    });
  }

  render() {
    return (
      <Wrapper size={this.props.size}>
        {this.state.selectedIndexes.length > 0 && <Reset onClick={this.reset}>reset</Reset>}
        {this.state.selectedIndexes.length < this.props.sections.length && <Trigger onClick={this.shuffleSection} />}

        <Sound url={RollingSound} playStatus={this.state.playSound} />

        <Circle turn={this.state.rotation * -1} size={this.props.size}>
          {this.props.sections.map((section, index) => (
            <WheelSection
              key={index}
              index={index}
              section={section}
              length={this.props.sections.length}
              wheelSize={this.props.size}
              disabled={this.state.selectedIndexes.includes(index) && this.state.selectedIndex !== index}
            />
          ))}
        </Circle>
      </Wrapper>
    );
  }
}

Wheel.defaultProps = {
  turnsByShuffle: 10,
  size: 600, // in pixels
};

export default Wheel;

const Wrapper = styled.div`
  position: relative;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  margin: auto;
`;

const Trigger = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
`;

const Reset = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Circle = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;
  border-radius: ${props => props.size}px;
  overflow: hidden;
  transform: rotate(${props => props.turn}deg);
  transition: transform 7s cubic-bezier(0.39, 0.25, 0, 1.05);
`;
