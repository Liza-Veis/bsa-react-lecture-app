import { configureStore } from '@reduxjs/toolkit';

import { tasks as tasksService } from '../services/services';
import { rootReducer } from './root-reducer';

const extraArgument = {
  tasksService,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
});

export { store, extraArgument };
