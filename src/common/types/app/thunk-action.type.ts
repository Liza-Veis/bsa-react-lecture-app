import { UnknownAction } from 'redux';
import { type ThunkAction as LibraryThunkAction } from 'redux-thunk';

import { type RootState } from './root-state.type';
import { extraArgument } from '../../../store/store';

type ThunkAction = LibraryThunkAction<
  void,
  RootState,
  typeof extraArgument,
  UnknownAction
>;

export { type ThunkAction };
