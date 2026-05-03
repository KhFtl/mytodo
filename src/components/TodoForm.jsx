import React, {useState} from "react";

function TodoForm({addTask}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()) {
            addTask(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введіть нову задачу..."
            />
            <button type="submit">Додати</button>
        </form>
    );
}

export default TodoForm;