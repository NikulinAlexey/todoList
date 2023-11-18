import { useState, useEffect, useRef } from "react";

import { TodoList } from './TodoList';
import { ITodo } from '../types/data';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }
  function addTodo() {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])

      setValue('');
    }
  }
  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        complete: !todo.complete,
      }
    }))
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="content">
      <div className="content__text-container">
        <input
          placeholder="What are you going to do?"
          value={value}
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="content__input"
        />
        <button
          onClick={addTodo}
          className="content__button"
        >
          Add
        </button>
      </div>

      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App;