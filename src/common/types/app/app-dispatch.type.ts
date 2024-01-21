import { extraArgument } from '../../../store/store';
import { type ThunkDispatch } from 'redux-thunk';
import { RootState } from './root-state.type';
import { UnknownAction } from 'redux';

type AppDispatch = ThunkDispatch<
  RootState,
  typeof extraArgument,
  UnknownAction
>;

export { type AppDispatch };
