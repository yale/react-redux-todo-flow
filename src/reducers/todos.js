import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

const TodoHelpers = {
  add(todos, text) {
    return [
      ...todos,
      {
        id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text,
      },
    ];
  },

  delete(todos, id) {
    return todos.filter(todo => todo.id !== id);
  },

  edit(todos, id, text) {
    return todos.map(todo => (todo.id === id ? { ...todo, text: text } : todo));
  },

  complete(todos, id) {
    return todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  },
};

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return TodoHelpers.add(state, action.text);

    case DELETE_TODO:
      return TodoHelpers.delete(state, action.id);

    case EDIT_TODO:
      return TodoHelpers.edit(state, action.id, action.text);

    case COMPLETE_TODO:
      return TodoHelpers.complete(state, action.id);

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
