import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h3>Active Todos:</h3>
      {activeTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <h3>Completed Todos:</h3>
      {completedTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
