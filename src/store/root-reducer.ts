import { combineReducers } from 'redux';

import { reducer as tasksReducer } from './tasks/tasks';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export { rootReducer };
