// Actions
const ADD_ITEM = 'lutti-wheel/sections/ADD_ITEM';
const EDIT_ITEM = 'lutti-wheel/sections/EDIT_ITEM';
const REMOVE_ITEM = 'lutti-wheel/sections/REMOVE_ITEM';
const UPDATE_SELECTED_INDEX = 'lutti-wheel/sections/UPDATE_SELECTED_INDEX';
const RESET_SELECTED_INDEXES = 'lutti-wheel/sections/RESET_SELECTED_INDEXES';
const UPDATE_ROTATION = 'lutti-wheel/sections/UPDATE_ROTATION';

// Default State
const defaultState = {
  selectedIndex: 0,
  selectedIndexes: [],
  rotation: 90,
  data: [
    {
      label: '0',
      color: '#008000',
    },
    {
      label: '1',
      color: '#ffa500',
    },
    {
      label: '2',
      color: '#ffff00',
    },
    {
      label: '3',
      color: '#0000ff',
    },
    {
      label: '4',
      color: '#ffc0cb',
    },
  ],
};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: [
          ...state.data,
          {
            label: action.label,
            color: action.color,
          },
        ],
        selectedIndex: defaultState.selectedIndex,
        selectedIndexes: defaultState.selectedIndexes,
        rotation: defaultState.rotation,
      };

    case EDIT_ITEM:
      return {
        ...state,
        data: [...state.data.slice(0, action.index), action.item, ...state.data.slice(action.index + 1)],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        data: [
          // from the start to the one we want to delete
          ...state.data.slice(0, action.index),
          // after the deleted one, to the end
          ...state.data.slice(action.index + 1),
        ],
        selectedIndex: defaultState.selectedIndex,
        selectedIndexes: defaultState.selectedIndexes,
        rotation: defaultState.rotation,
      };

    case UPDATE_SELECTED_INDEX:
      return {
        ...state,
        selectedIndex: action.index,
        selectedIndexes: [...state.selectedIndexes, action.index],
      };

    case RESET_SELECTED_INDEXES:
      return {
        ...state,
        selectedIndex: defaultState.selectedIndex,
        selectedIndexes: defaultState.selectedIndexes,
        rotation: defaultState.rotation,
      };

    case UPDATE_ROTATION:
      return {
        ...state,
        rotation: action.rotation,
      };

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

export function updateSelectedIndex(index) {
  return {
    type: UPDATE_SELECTED_INDEX,
    index,
  };
}

export function resetSelectedIndexes() {
  return {
    type: RESET_SELECTED_INDEXES,
  };
}

export function updateRotation(rotation) {
  return {
    type: UPDATE_ROTATION,
    rotation,
  };
}
