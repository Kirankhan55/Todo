// store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.payload.id, text: action.payload.text, completed: false }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    case 'COMPLETE_TODO':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
