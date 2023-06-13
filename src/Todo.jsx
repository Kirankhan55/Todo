import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdate = () => {
    if (text.trim()) {
      dispatch({ type: 'UPDATE_TODO', payload: { id: todo.id, text } });
      setEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id });
  };

  const handleComplete = () => {
    dispatch({ type: 'COMPLETE_TODO', payload: todo.id });
  };

  return (
    <div className="todo">
      {editing ? (
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          {!todo.completed && (
            <button onClick={handleComplete}>Complete</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Todo;
