import { combineReducers } from 'redux';

import { reducer as tasksReducer } from './tasks/reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export { rootReducer };
