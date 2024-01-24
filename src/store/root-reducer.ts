import { reducer as tasksReducer } from './tasks/tasks';

const rootReducer = {
  tasks: tasksReducer,
};

export { rootReducer };
