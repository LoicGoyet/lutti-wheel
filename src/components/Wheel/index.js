import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sound from 'react-sound';

import WheelSection from '../WheelSection';
import RollingSound from '../../sounds/rolling.mp3';
import SpinButton from '../SpinButton';
import Pico from './images/pico.png';

class Wheel extends React.Component {
  static propTypes = {
    sections: PropTypes.array.isRequired,
    turnsByShuffle: PropTypes.number,
    size: PropTypes.number,
    selectedIndex: PropTypes.number.isRequired,
    selectedIndexes: PropTypes.array.isRequired,
    updateSelectedIndex: PropTypes.func.isRequired,
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
    this.playSound = this.playSound.bind(this);

    this.state = {
      playSound: Sound.status.STOPPED,
      highlightSelected: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndexes.length === 0) {
      this.setState({ highlightSelected: false });
    }
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
    this.setState({ highlightSelected: false });

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

    return setTimeout(() => {
      this.button.blur();
      this.setState({ highlightSelected: true });
    }, 7000);
  }

  render() {
    return (
      <Wrapper size={this.props.size}>
        <PicoImage src={Pico} />

        {this.props.selectedIndexes.length < this.props.sections.length && (
          <SpinButton
            onClick={this.shuffleSection}
            reference={button => {
              this.button = button;
            }}
          />
        )}

        {this.props.selectedIndexes.length >= this.props.sections.length && <SpinButtonPlaceholder />}

        <Sound volume={this.props.soundOn ? 100 : 0} url={RollingSound} playStatus={this.state.playSound} />

        <Circle turn={this.props.rotation} size={this.props.size}>
          {this.props.sections.map((section, index) => (
            <WheelSection
              key={`${index} ${section.label}`}
              index={index}
              section={section}
              length={this.props.sections.length}
              wheelSize={this.props.size}
              downlight={this.state.highlightSelected && this.props.selectedIndex !== index}
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

const Circle = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;
  border-radius: ${props => props.size}px;
  overflow: hidden;
  transform: rotate(${props => props.turn}deg);
  transition: transform ${props => (props.turn === 90 ? '0s' : '7s')} cubic-bezier(0, 0, 0.14, 1.04);
  background-color: #000;
`;

const SpinButtonPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  color: rgb(200, 200, 200);
  border: 3px solid;
`;

const PicoImage = styled.img`
  position: absolute;
  top: 50%;
  right: -55px;
  transform: translateY(-50%);
  z-index: 3;
  width: 94px;
`;
