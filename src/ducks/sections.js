// Actions
const ADD_ITEM = 'lutti-wheel/sections/ADD_ITEM';
const EDIT_ITEM = 'lutti-wheel/sections/EDIT_ITEM';
const REMOVE_ITEM = 'lutti-wheel/sections/REMOVE_ITEM';

// Default State
const defaultState = [
  {
    label: 'zero zero',
    color: '#008000',
  },
  {
    label: 'one',
    color: '#ffa500',
  },
  {
    label: 'two',
    color: '#ffff00',
  },
  {
    label: 'three',
    color: '#0000ff',
  },
  {
    label: 'four',
    color: '#ffc0cb',
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

    case EDIT_ITEM:
      return [...state.slice(0, action.index), action.item, ...state.slice(action.index + 1)];

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

export function editItem(index, item) {
  return {
    type: EDIT_ITEM,
    index,
    item,
  };
}

export function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    index,
  };
}
