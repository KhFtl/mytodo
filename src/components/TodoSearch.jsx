import React, {useState} from 'react';

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
            <input
                type="text"
                placeholder="Пошук задачі"
                value={term}
                onChange={handleChange}
                className="todo-search-input"
            />
            <button
                type="submit"
                className="todo-search-button"
            >Пошук
            </button>
        </form>
    );
}
export default TodoSearch;