import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Limpar a caixinha do gato',
      category: 'Pessoal',
      completed: false,
    },
    {
      id: 2,
      text: 'Estudar programação',
      category: 'Estudos',
      completed: false,
    },
    {
      id: 3,
      text: 'Fechar os atendimentos do integrator',
      category: 'Trabalho',
      completed: false,
    },
  ]);

  const [search, setSearch] = useState('');

  const addTodo = (text, category) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      category,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.completed = !todo.completed) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
