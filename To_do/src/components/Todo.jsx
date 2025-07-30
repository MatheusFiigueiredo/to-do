import React from 'react';

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div>
      <div className="todo" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
          <p>{todo.completed}</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            Complete
          </button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
