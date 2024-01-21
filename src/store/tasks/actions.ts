import {
  type ValueOf,
  type Task,
  type ThunkAction,
} from '../../common/types/types';
import { DataStatus } from '../../common/enums/enums';
import { ActionType } from './common';

type SetStatusAction = {
  type: typeof ActionType.SET_STATUS;
  payload: {
    status: ValueOf<typeof DataStatus>;
  };
};

type SetTasksAction = {
  type: typeof ActionType.SET_TASKS;
  payload: {
    tasks: Task[];
  };
};

type AddTaskAction = {
  type: typeof ActionType.ADD_TASK;
  payload: Task;
};

type UpdateTaskActionPayload = {
  id: string;
  isCompleted: boolean;
};

type SetTaskAction = {
  type: typeof ActionType.SET_TASK;
  payload: Task;
};

type SetCurrentTaskAction = {
  type: typeof ActionType.SET_CURRENT_TASK;
  payload: Task | null;
};

type Action =
  | SetStatusAction
  | SetTasksAction
  | AddTaskAction
  | SetTaskAction
  | SetCurrentTaskAction;

const setStatus = (status: ValueOf<typeof DataStatus>) => {
  return {
    type: ActionType.SET_STATUS,
    payload: {
      status,
    },
  };
};

const setTasks = (tasks: Task[]): SetTasksAction => {
  return {
    type: ActionType.SET_TASKS,
    payload: {
      tasks,
    },
  };
};

const addTask = (payload: Task): AddTaskAction => {
  return {
    type: ActionType.ADD_TASK,
    payload,
  };
};

const setTask = (payload: Task): SetTaskAction => {
  return {
    type: ActionType.SET_TASK,
    payload,
  };
};

const setCurrentTask = (payload: Task | null): SetCurrentTaskAction => {
  return {
    type: ActionType.SET_CURRENT_TASK,
    payload,
  };
};

const loadTasks =
  (): ThunkAction =>
  async (dispatch, _getState, { tasksService }) => {
    dispatch(setStatus(DataStatus.PENDING));

    try {
      const tasks = await tasksService.getAll();

      dispatch(setTasks(tasks));

      dispatch(setStatus(DataStatus.SUCCESS));
    } catch {
      dispatch(setStatus(DataStatus.ERROR));
    }
  };

const loadTask =
  (id: string): ThunkAction =>
  async (dispatch, _getState, { tasksService }) => {
    try {
      const task = await tasksService.getById(id);

      dispatch(setCurrentTask(task));
    } catch {
      dispatch(setStatus(DataStatus.ERROR));
    }
  };

const createTask =
  (title: string): ThunkAction =>
  async (dispatch, _getState, { tasksService }) => {
    const payload = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };

    try {
      const task = await tasksService.create(payload);

      dispatch(addTask(task));
    } catch {
      dispatch(setStatus(DataStatus.ERROR));
    }
  };

const updateTask =
  (payload: UpdateTaskActionPayload): ThunkAction =>
  async (dispatch, _getState, { tasksService }) => {
    try {
      const task = await tasksService.update(payload);

      dispatch(setTask(task));
    } catch {
      dispatch(setStatus(DataStatus.ERROR));
    }
  };

const actions = {
  loadTasks,
  loadTask,
  createTask,
  updateTask,
};

export { type Action, actions };
