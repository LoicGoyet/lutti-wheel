// Actions
const ADD_ITEM = 'lutti-wheel/setups/ADD_ITEM';
const EDIT_ITEM = 'lutti-wheel/setups/EDIT_ITEM';
const REMOVE_ITEM = 'lutti-wheel/setups/REMOVE_ITEM';
const UPDATE_SELECTED_INDEX = 'lutti-wheel/setups/UPDATE_SELECTED_INDEX';
const RESET_SELECTED_INDEXES = 'lutti-wheel/setups/RESET_SELECTED_INDEXES';
const UPDATE_ROTATION = 'lutti-wheel/setups/UPDATE_ROTATION';
const TOOGLE_ITEM_SELECTION = 'lutti-wheel/setups/TOOGLE_ITEM_SELECTION';
const RETITLE_SETUP = 'lutti-wheel/setups/RETITLE_SETUP';

const ADD_SETUP = 'lutti-wheel/setups/ADD_SETUP';

// Default State
const defaultState = {
  byId: {
    0: {
      id: 0,
      selectedIndex: 0,
      selectedIndexes: [],
      rotation: 90,
      title: 'Test setup',
      data: [
        {
          label: 'section 1',
          color: '#0c3953',
        },
        {
          label: 'section 2',
          color: '#0E147A',
        },
      ],
    },
  },
  allIds: [0],
  activeId: 0,
};

const freshSetup = {
  id: 0,
  selectedIndex: 0,
  selectedIndexes: [],
  rotation: 90,
  title: 'fresh setup setup',
  data: [
    {
      label: 'section 1',
      color: '#0c3953',
    },
    {
      label: 'section 2',
      color: '#0E147A',
    },
  ],
};

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            ...state.byId[state.activeId],
            selectedIndex: 0,
            selectedIndexes: [],
            rotation: 90,
            data: [
              ...state.byId[state.activeId].data,
              {
                label: action.label,
                color: action.color,
              },
            ],
          },
        },
      };
    }

    case EDIT_ITEM: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            ...state.byId[state.activeId],
            data: [
              ...state.byId[state.activeId].data.slice(0, action.index),
              action.item,
              ...state.byId[state.activeId].data.slice(action.index + 1),
            ],
          },
        },
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            ...state.byId[state.activeId],
            selectedIndex: 0,
            selectedIndexes: [],
            rotation: 90,
            data: [
              // from the start to the one we want to delete
              ...state.byId[state.activeId].data.slice(0, action.index),
              // after the deleted one, to the end
              ...state.byId[state.activeId].data.slice(action.index + 1),
            ],
          },
        },
      };
    }

    case UPDATE_SELECTED_INDEX: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            ...state.byId[state.activeId],
            selectedIndex: action.index,
            selectedIndexes: [...state.byId[state.activeId].selectedIndexes, action.index],
          },
        },
      };
    }

    case RESET_SELECTED_INDEXES: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            ...state.byId[state.activeId],
            selectedIndex: 0,
            selectedIndexes: [],
            rotation: 90,
          },
        },
      };
    }

    case UPDATE_ROTATION: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            ...state.byId[state.activeId],
            rotation: action.rotation,
          },
        },
      };
    }

    case TOOGLE_ITEM_SELECTION: {
      // if index is already in selectedIndexes
      const { selectedIndexes } = state.byId[state.activeId];
      let newSelectedIndexes = [...selectedIndexes, action.index];

      if (selectedIndexes.indexOf(action.index) >= 0) {
        newSelectedIndexes = selectedIndexes.filter(index => index !== action.index);
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            ...state.byId[state.activeId],
            selectedIndexes: newSelectedIndexes,
          },
        },
      };
    }

    case RETITLE_SETUP: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            ...state.byId[state.activeId],
            title: action.title,
          },
        },
      };
    }

    case ADD_SETUP: {
      // get setup id
      const id = state.allIds[state.allIds.length - 1] + 1;

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...freshSetup,
            title: `setup ${id}`,
            id,
          },
        },
        allIds: [...state.allIds, id],
        activeId: id,
      };
    }

    default: {
      return state;
    }
  }
}

// Action Creators
export const addItem = (label, color) => ({
  type: ADD_ITEM,
  label,
  color,
});

export const editItem = (index, item) => ({
  type: EDIT_ITEM,
  index,
  item,
});

export const removeItem = index => ({
  type: REMOVE_ITEM,
  index,
});

export const updateSelectedIndex = index => ({
  type: UPDATE_SELECTED_INDEX,
  index,
});

export const resetSelectedIndexes = setupId => ({
  type: RESET_SELECTED_INDEXES,
  setupId,
});

export const updateRotation = rotation => ({
  type: UPDATE_ROTATION,
  rotation,
});

export const toogleItemSelection = index => ({
  type: TOOGLE_ITEM_SELECTION,
  index,
});

export const retitleSetup = title => ({
  type: RETITLE_SETUP,
  title,
});

export const addSetup = () => ({
  type: ADD_SETUP,
});
