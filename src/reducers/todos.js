// @flow
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes';

import type { Todo } from '../types';
import type { Actions } from '../actions/index';

type State = Todo[];

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

const todoHelpers = {
  add(todos, text: string) {
    return [
      ...todos,
      {
        id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text,
      },
    ];
  },

  delete(todos: Todo[], id: number) {
    return todos.filter(todo => todo.id !== id);
  },

  edit(todos: Todo[], id: number, text: string) {
    return todos.map(todo => (todo.id === id ? { ...todo, text: text } : todo));
  },

  complete(todos: Todo[], id: number) {
    return todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  },
};

function todos(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ADD_TODO:
      return todoHelpers.add(state, action.text);

    case DELETE_TODO:
      return todoHelpers.delete(state, action.id);

    case EDIT_TODO:
      return todoHelpers.edit(state, action.id, action.text);

    case COMPLETE_TODO:
      return todoHelpers.complete(state, action.id);

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked,
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}

export default todos;
