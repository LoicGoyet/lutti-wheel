import React from 'react'
import styled from 'styled-components'

const WheelSection = props => {
    const getTanFromDegrees = degrees => Math.tan(degrees * Math.PI / 180)

    const height = props.wheelSize / 2; // as px
    const vertexAngle = (360 / props.length); // as degree
    const halfBase = height / getTanFromDegrees(180 - vertexAngle / 2 - 90);

    return (
        <Wrapper
            bgColor={props.section.color}
            height={height}
            halfBase={halfBase}
            index={props.index}
            vertexAngle={vertexAngle}
            disabled={props.disabled}
            wheelSize={props.wheelSize}
        >
            <Label wheelSize={props.wheelSize}>{props.section.label}</Label>
        </Wrapper>
    )
}

export default WheelSection

const Wrapper = styled.div`
    width: 0;
    height: 0;
    border-width: ${props => props.height}px ${props => props.halfBase}px 0;
    border-color: ${props => props.bgColor} transparent;
    border-style: solid;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: ${props => -((props.halfBase * 2) - props.wheelSize) / 2}px;
    transform-origin: 50% 100%;
    transform: rotate(${props => props.index * props.vertexAngle}deg);
    opacity: ${props => props.disabled ? 0.15 : 1};
    transition: opacity 200ms ease-in-out;
`;

const Label = styled.span`
  position: absolute;
  top: -${props => props.wheelSize / 4};
  width: ${props => props.wheelSize / 2}px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
`;