function Todo({ task, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${task.done ? 'done' : ''}`}>
      <span onClick={onToggle}>{task.text}</span>
      <button className="delbtn" onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Todo;
