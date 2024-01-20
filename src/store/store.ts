import { legacy_createStore } from 'redux';

import { rootReducer } from './root-reducer';

const store = legacy_createStore(rootReducer);

export { store };