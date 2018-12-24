import { combineReducers } from 'redux';

import setups from './setups';
import ui from './ui';

export default combineReducers({
  setups,
  ui,
});
