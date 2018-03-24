import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WheelSection = props => {
  const getTanFromDegrees = degrees => Math.tan(degrees * Math.PI / 180);

  const height = props.wheelSize / 2; // as px
  const vertexAngle = 360 / props.length; // as degree
  const halfBase = height / getTanFromDegrees(180 - vertexAngle / 2 - 90);

  const Element = props.length > 2 ? Wrapper : HalfWrapper;

  return (
    <Element
      bgColor={props.section.color}
      height={height}
      halfBase={halfBase}
      index={props.index}
      vertexAngle={vertexAngle}
      disabled={props.disabled}
      wheelSize={props.wheelSize}
      downlight={props.downlight}
    >
      <Label bgColor={props.section.color} disabled={props.disabled} wheelSize={props.wheelSize}>
        {props.section.label}
      </Label>
    </Element>
  );
};

WheelSection.propTypes = {
  wheelSize: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  section: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  downlight: PropTypes.bool,
};

WheelSection.defaultProps = {
  disabled: false,
  downlight: false,
};

export default WheelSection;

const getBgColor = props => (props.disabled ? '#a6a6a6' : props.bgColor);

const Wrapper = styled.div`
  width: 0;
  height: 0;
  border-width: ${props => props.height}px ${props => props.halfBase}px 0;
  border-color: ${props => getBgColor(props)} transparent;
  border-style: solid;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: ${props => -(props.halfBase * 2 - props.wheelSize) / 2}px;
  transform-origin: 50% 100%;
  transform: translate3d(0, 0, 0) rotate(${props => props.index * props.vertexAngle}deg);
  opacity: ${props => (props.downlight ? 0.4 : 1)};
  transition: opacity 400ms ease-in-out;
  color: #fff;
`;

const HalfWrapper = Wrapper.extend`
  border-width: 0;
  width: 0;
  height: ${props => props.height}px;
  width: ${props => props.height * 2}px;
  background-color: ${props => props.bgColor};

  span {
    top: 50% !important;
  }
`;

const Label = styled.span`
  position: absolute;
  top: -${props => props.wheelSize / 4}px;
  width: ${props => props.wheelSize / 2}px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-weight: 700;
  // background-color: ${props => getBgColor(props)};
`;
