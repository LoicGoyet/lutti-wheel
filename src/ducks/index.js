import { combineReducers } from 'redux';

import sections from './sections';
import ui from './ui';

export default combineReducers({
  sections,
  ui,
});
