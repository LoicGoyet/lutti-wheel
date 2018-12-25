import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaEyeSlash from 'react-icons/lib/fa/eye-slash';
import FaEye from 'react-icons/lib/fa/eye';
import MdVolumeOff from 'react-icons/lib/md/volume-off';
import MdVolumeUp from 'react-icons/lib/md/volume-up';
import MdSync from 'react-icons/lib/md/sync';

const UIForm = props => (
  <Wrapper>
    {props.selectedIndexes.length > 0 && (
      <Button onClick={() => props.resetSelectedIndexes()}>
        <MdSync />
        <span>enable all sections</span>
      </Button>
    )}

    <Button onClick={props.toggleStreamMode}>
      {props.streamMode === true && <FaEye />}
      {props.streamMode !== true && <FaEyeSlash />}
      <span>stream mode {props.streamMode ? 'on' : 'off'}</span>
    </Button>

    <Button onClick={props.toggleSoundOn}>
      {props.soundOn === true && <MdVolumeUp />}
      {props.soundOn !== true && <MdVolumeOff />}
      <span>sound {props.soundOn ? 'on' : 'off'}</span>
    </Button>
  </Wrapper>
);

UIForm.propTypes = {
  streamMode: PropTypes.bool.isRequired,
  soundOn: PropTypes.bool.isRequired,
  toggleStreamMode: PropTypes.func.isRequired,
  toggleSoundOn: PropTypes.func.isRequired,
  selectedIndexes: PropTypes.array,
  resetSelectedIndexes: PropTypes.func.isRequired,
};

UIForm.defaultProps = {
  selectedIndexes: [],
};

export default UIForm;

const Wrapper = styled.section`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  font-family: inherit;
  color: inherit;
  text-align: left;
  font-size: 0.8rem;
  padding: 0 0.5em;
  height: 2.375em;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 0.5em;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  &:focus {
    outline: 0;
  }
`;
