import { DataStatus } from '../../common/enums/enums';
import { type ValueOf, type Task } from '../../common/types/types';
import { type Action } from './actions';
import { ActionType } from './common';

type State = {
  tasks: Task[];
  currentTask: Task | null;
  status: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  tasks: [],
  currentTask: null,
  status: DataStatus.IDLE,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_STATUS: {
      return {
        ...state,
        status: action.payload.status,
      };
    }

    case ActionType.SET_TASKS: {
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    }

    case ActionType.ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }

    case ActionType.SET_TASK: {
      const tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }

        return task;
      });

      const currentTask =
        state.currentTask?.id === action.payload.id
          ? action.payload
          : state.currentTask;

      return {
        ...state,
        tasks,
        currentTask,
      };
    }

    case ActionType.SET_CURRENT_TASK: {
      return {
        ...state,
        currentTask: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer };
