import { createSlice } from '@reduxjs/toolkit';
import { DataStatus } from '../../common/enums/enums';
import { type ValueOf, type Task } from '../../common/types/types';
import { createTask, loadTask, loadTasks, updateTask } from './actions';

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

const { reducer, actions, name } = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadTasks.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(loadTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(loadTasks.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });

    builder.addCase(loadTask.fulfilled, (state, action) => {
      state.currentTask = action.payload;
    });

    builder.addCase(createTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });

    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }

        return task;
      });

      if (state.currentTask?.id === action.payload.id) {
        state.currentTask = action.payload;
      }
    });
  },
});

export { reducer, name, actions };
