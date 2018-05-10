// @flow
import type { $ExtractReturn } from '../flowHelpers';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_ALL_TODOS,
  COMPLETE_TODO,
  CLEAR_COMPLETED,
  SET_VISIBILITY_FILTER,
} from '../constants/ActionTypes';

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  text,
});
export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id,
});

export const editTodo = (id: number, text: string) => ({
  type: EDIT_TODO,
  id,
  text,
});
export const completeTodo = (id: number) => ({
  type: COMPLETE_TODO,
  id,
});
export const completeAllTodos = () => ({
  type: COMPLETE_ALL_TODOS,
});
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
export const setVisibilityFilter = (filter: string) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export type Actions =
  | $ExtractReturn<typeof addTodo>
  | $ExtractReturn<typeof deleteTodo>
  | $ExtractReturn<typeof editTodo>
  | $ExtractReturn<typeof completeTodo>
  | $ExtractReturn<typeof completeAllTodos>
  | $ExtractReturn<typeof clearCompleted>
  | $ExtractReturn<typeof setVisibilityFilter>;
