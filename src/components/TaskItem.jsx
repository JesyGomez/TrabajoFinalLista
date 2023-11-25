import { FaTrashAlt } from 'react-icons/fa';
import { TaskEdit } from './TaskEdit';

export const TaskItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label className={`container-done ${todo.done ? 'active' : ''}`}></label>
      </span>
      <TaskEdit todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button
        className='btn-delete'
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};