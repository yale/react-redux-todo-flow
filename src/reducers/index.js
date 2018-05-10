// @flow
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import type { $Return } from '../flowHelpers';

const reducers = {
  todos,
  visibilityFilter,
};

type Reducers = typeof reducers;
export type State = $ObjMap<Reducers, $Return>;

const rootReducer = combineReducers(reducers);

export default rootReducer;
