// @flow
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const reducers = {
  todos,
  visibilityFilter,
};

type Reducers = typeof reducers;
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>;

const rootReducer = combineReducers(reducers);

export default rootReducer;
