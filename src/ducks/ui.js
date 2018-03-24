// Actions
const TOGGLE_STREAM_MODE = 'lutti-wheel/sections/TOGGLE_STREAM_MODE';
const TOGGLE_SOUND_ON = 'lutti-wheel/sections/TOGGLE_SOUND_ON';

// Default State
const defaultState = {
  streamMode: false,
  soundOn: true,
};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_STREAM_MODE:
      return {
        ...state,
        streamMode: !state.streamMode,
      };

    case TOGGLE_SOUND_ON:
      return {
        ...state,
        soundOn: !state.soundOn,
      };

    default:
      return state;
  }
}

// Action Creators
export function toggleStreamMode() {
  return {
    type: TOGGLE_STREAM_MODE,
  };
}

export function toggleSoundOn() {
  return {
    type: TOGGLE_SOUND_ON,
  };
}
