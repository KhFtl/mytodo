import React, {useState} from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

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
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введіть нову задачу..."
            />
            <Button type="submit">Додати</Button>
        </form>
    );
}

export default TodoForm;