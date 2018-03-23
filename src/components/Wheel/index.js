import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sound from 'react-sound';

import WheelSection from '../WheelSection';
import RollingSound from '../../sounds/rolling.mp3';

class Wheel extends React.Component {
  static propTypes = {
    sections: PropTypes.array.isRequired,
    turnsByShuffle: PropTypes.number,
    size: PropTypes.number,
    selectedIndex: PropTypes.number.isRequired,
    selectedIndexes: PropTypes.array.isRequired,
    updateSelectedIndex: PropTypes.func.isRequired,
    resetSelectedIndexes: PropTypes.func.isRequired,
    updateRotation: PropTypes.func.isRequired,
    rotation: PropTypes.number,
  };

  static defaultProps = {
    turnsByShuffle: 10,
    size: 600, // in pixels
    rotation: 90,
  };

  constructor(props) {
    super(props);

    this.shuffleSection = this.shuffleSection.bind(this);
    this.reset = this.reset.bind(this);
    this.playSound = this.playSound.bind(this);

    this.state = {
      playSound: Sound.status.STOPPED,
    };
  }

  playSound() {
    this.setState({ playSound: Sound.status.STOPPED }, () => {
      this.setState({
        playSound: Sound.status.PLAYING,
      });
    });
  }

  shuffleSection() {
    this.playSound();

    const previousSelectedIndex = this.props.selectedIndex;
    const possibleSections = this.props.sections.filter(
      (section, index) => !this.props.selectedIndexes.includes(index)
    );

    const selectedSection = possibleSections[Math.floor(Math.random() * Math.floor(possibleSections.length))];
    const selectedIndex = this.props.sections.indexOf(selectedSection);

    const newRotation = this.props.rotation + this.props.turnsByShuffle * 360;
    const rotation = newRotation + (previousSelectedIndex - selectedIndex) * (360 / this.props.sections.length);

    this.props.updateSelectedIndex(selectedIndex);
    this.props.updateRotation(rotation);
  }

  reset() {
    return this.props.resetSelectedIndexes();
  }

  render() {
    return (
      <Wrapper size={this.props.size}>
        {this.props.selectedIndexes.length > 0 && <Reset onClick={this.reset}>reset</Reset>}
        {this.props.selectedIndexes.length < this.props.sections.length && <Trigger onClick={this.shuffleSection} />}

        <Sound url={RollingSound} playStatus={this.state.playSound} />

        <Circle turn={this.props.rotation} size={this.props.size}>
          {this.props.sections.map((section, index) => (
            <WheelSection
              key={section.label}
              index={index}
              section={section}
              length={this.props.sections.length}
              wheelSize={this.props.size}
              disabled={this.props.selectedIndexes.includes(index) && this.props.selectedIndex !== index}
            />
          ))}
        </Circle>
      </Wrapper>
    );
  }
}

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
  transition: transform ${props => (props.turn === 90 ? '0s' : '7s')} cubic-bezier(0.39, 0.25, 0, 1.05);
`;
