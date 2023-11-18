import { TodoItem } from './TodoItem'

import { ITodo } from '../types/data';

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props;
  return (
    <div>
      <ul className='content__list'>
        {
          items.map(todo => (
            <TodoItem
              key={todo.id}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
              {...todo}
            />
          ))
        }

      </ul>
    </div>
  )
}

export {
  TodoList
}