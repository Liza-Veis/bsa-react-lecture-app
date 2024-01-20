import { type Task } from '../../common/types/types';
import { type Action } from './actions';
import { ActionType } from './common';

type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: [],
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }

    case ActionType.TOGGLE_TASK: {
      const tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, isCompleted: action.payload.isCompleted };
        }

        return task;
      });

      return {
        ...state,
        tasks,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer };
