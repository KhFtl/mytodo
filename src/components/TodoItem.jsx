
function TodoItem({task, toggleTask, deleteTask}) {
    return (
        <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <div className="todo-item-content">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
            </div>
            <button onClick={()=>deleteTask(task.id)}>Видалити</button>
        </li>
    )
}

export default TodoItem