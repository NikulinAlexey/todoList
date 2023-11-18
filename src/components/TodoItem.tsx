import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;

  return (
    <div
      style={{
        margin: '0 0 10px 0',
        display: 'flex',
        width: '200px'
      }}>
      <input
        style={{
          margin: '0 10px 0 0',
        }}
        type='checkbox'
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span>
        {title}
      </span>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'red',
          padding: '0',
          margin: '0 0 0 auto',
        }}
        onClick={() => removeTodo(id)}
      >
        X
      </button>
    </div>)
}

export {
  TodoItem
}
