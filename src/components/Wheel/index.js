import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sound from 'react-sound';

import WheelSection from '../WheelSection';
import RollingSound from '../../sounds/rolling.mp3';
import SpinButton from '../SpinButton';

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
    soundOn: PropTypes.bool,
  };

  static defaultProps = {
    turnsByShuffle: 10,
    size: 600, // in pixels
    rotation: 90,
    soundOn: true,
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
    return this.setState({ playSound: Sound.status.STOPPED }, () => {
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

    return setTimeout(() => this.button.blur(), 7000);
  }

  reset() {
    return this.props.resetSelectedIndexes();
  }

  render() {
    return (
      <Wrapper size={this.props.size}>
        {this.props.selectedIndexes.length > 0 && <Reset onClick={this.reset}>reset</Reset>}
        {this.props.selectedIndexes.length < this.props.sections.length && (
          <SpinButton
            onClick={this.shuffleSection}
            reference={button => {
              this.button = button;
            }}
          />
        )}

        <Sound volume={this.props.soundOn ? 100 : 0} url={RollingSound} playStatus={this.state.playSound} />

        <Circle turn={this.props.rotation} size={this.props.size}>
          {this.props.sections.map((section, index) => (
            <WheelSection
              key={`${index} ${section.label}`}
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
