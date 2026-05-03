import TodoItem from './TodoItem';

function TodoList({tasks, toggleTask, deleteTask}) {
    if(tasks.length === 0) {
        return <p>Список задач порожній</p>
    }

    return (
        <ul className="todo-list">
            {
                tasks.map( task => (
                       <TodoItem
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                       />
                    )
                )
            }
        </ul>
    );
}

export default TodoList