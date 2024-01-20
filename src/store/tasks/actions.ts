import { type Task } from '../../common/types/types';
import { ActionType } from './common';

type AddTaskAction = {
  type: typeof ActionType.ADD_TASK;
  payload: Task;
};

type ToggleTaskActionPayload = {
  id: string;
  isCompleted: boolean;
};

type ToggleTaskAction = {
  type: typeof ActionType.TOGGLE_TASK;
  payload: ToggleTaskActionPayload;
};

type Action = AddTaskAction | ToggleTaskAction;

const addTask = (title: string): AddTaskAction => {
  const payload = {
    id: crypto.randomUUID(),
    title,
    isCompleted: false,
  };

  return {
    type: ActionType.ADD_TASK,
    payload,
  };
};

const toggleTask = (payload: ToggleTaskActionPayload): ToggleTaskAction => {
  return {
    type: ActionType.TOGGLE_TASK,
    payload,
  };
};

const actions = {
  addTask,
  toggleTask,
};

export { type Action, actions };
