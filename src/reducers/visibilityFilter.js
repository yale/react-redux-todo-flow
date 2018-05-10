// @flow
import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes';
import { SHOW_ALL } from '../constants/TodoFilters';
import type { Actions } from '../actions';

type State = string;

const visibilityFilter = (state: State = SHOW_ALL, action: Actions): State => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
