import { applyMiddleware, legacy_createStore } from 'redux';
import { withExtraArgument as thunkMiddleware } from 'redux-thunk';

import { tasks as tasksService } from '../services/services';
import { rootReducer } from './root-reducer';

const extraArgument = {
  tasksService,
};

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware(extraArgument)) as any,
);

export { store, extraArgument };
