import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaEyeSlash from 'react-icons/lib/fa/eye-slash';
import FaEye from 'react-icons/lib/fa/eye';
import MdVolumeOff from 'react-icons/lib/md/volume-off';
import MdVolumeUp from 'react-icons/lib/md/volume-up';

const UIForm = props => (
  <Wrapper>
    <button onClick={props.toggleStreamMode}>
      {props.streamMode === true && <FaEye />}
      {props.streamMode !== true && <FaEyeSlash />}
      stream mode {props.streamMode ? 'on' : 'off'}
    </button>

    <button onClick={props.toggleSoundOn}>
      {props.soundOn === true && <MdVolumeUp />}
      {props.soundOn !== true && <MdVolumeOff />}
      sound {props.soundOn ? 'on' : 'off'}
    </button>
  </Wrapper>
);

UIForm.propTypes = {
  streamMode: PropTypes.bool.isRequired,
  soundOn: PropTypes.bool.isRequired,
  toggleStreamMode: PropTypes.func.isRequired,
  toggleSoundOn: PropTypes.func.isRequired,
};

export default UIForm;

const Wrapper = styled.section`
  position: absolute;
  top: 75px;
  left: 10px;
  display: flex;
  flex-direction: column;
`;
