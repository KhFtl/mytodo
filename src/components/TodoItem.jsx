import "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

function TodoItem({task, toggleTask, deleteTask}) {
    return (
        <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <div className="todo-item-content">
                <Input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
            </div>
            <Button onClick={()=>deleteTask(task.id)}>Видалити</Button>
        </li>
    )
}

export default TodoItem