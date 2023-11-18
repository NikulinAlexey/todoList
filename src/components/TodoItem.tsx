import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;

  return (
    <li className='content__list-item'>
      <input
        className='content__checkbox'
        type='checkbox'
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span>
        {title}
      </span>
      <button
        className='content__delete-btn'
        onClick={() => removeTodo(id)}>
        удалить
      </button>
    </li>)
}

export {
  TodoItem
}
