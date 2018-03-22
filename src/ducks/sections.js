// Actions
const ADD_ITEM = 'lutti-wheel/sections/ADD_ITEM';
const REMOVE_ITEM = 'lutti-wheel/sections/REMOVE_ITEM';

// Default State
const defaultState = [
  {
    label: 'zero',
    color: 'green',
  },
  {
    label: 'one',
    color: 'orange',
  },
  {
    label: 'two',
    color: 'yellow',
  },
  {
    label: 'three',
    color: 'blue',
  },
  {
    label: 'four',
    color: 'pink'
  },
];

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          label: action.label,
          color: action.color,
        },
      ];
    case REMOVE_ITEM:
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.index),
        // after the deleted one, to the end
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

// Action Creators
export function addItem(label, color) {
  return {
    type: ADD_ITEM,
    label,
    color,
  };
}

export function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    index,
  };
}
