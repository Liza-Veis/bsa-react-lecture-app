import { loadTasks, loadTask, createTask, updateTask } from './actions';
import { actions, reducer } from './slice';

const allActions = {
  ...actions,
  loadTasks,
  loadTask,
  createTask,
  updateTask,
};

export { allActions as actions, reducer };
