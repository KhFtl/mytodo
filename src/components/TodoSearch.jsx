import {useState} from 'react';
import Button from "./ui/Button";
import Input from "./ui/Input";

function TodoSearch({onSearch}) {
    const [term, setTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setTerm(value);
        onSearch(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    }

    return (
        <form onSubmit={handleSubmit} className="todo-search-form">
            <Input
                placeholder="Пошук задачі"
                value={term}
                onChange={handleChange}
                className="todo-search-input"
            />
            <Button
                type="submit"
                className="todo-search-button"
            >Знайти задачу
            </Button>
        </form>
    );
}
export default TodoSearch;