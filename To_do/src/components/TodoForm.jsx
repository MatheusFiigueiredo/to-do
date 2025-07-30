import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue('');
    setCategory('');
  };

  return (
    <div className="todo-form">
      <h2>Create a new task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task description"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select category</option>
          <option value="Pessoal">Private</option>
          <option value="Estudos">Study</option>
          <option value="Trabalho">Work</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
