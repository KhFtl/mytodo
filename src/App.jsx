import {useState, useEffect} from "react";
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
//Об'єкт роботи з задачами
    const [tasks, setTasks] = useState( ()=>
        {
            const savedTasks = localStorage.getItem('tasks');
            if(savedTasks) {
                return JSON.parse(savedTasks);
            }
        return [
            {id: 1, text:'Вивчити React', completed: false},
            {id: 2, text: 'Подивитися аніме Наруто', completed: true},
            {id:3, text: 'Зробити ДЗ по React.js', completed: true},
            {id:4, text: 'Зробити ВСІ ДЗ', completed: false}
        ]
        });

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
//Пропс для пошуку
const[searchQuery, setSearchQuery] = useState('');
//Функція додавання задачі
const addTask = (text) => {
    const newTask ={
        id: Date.now(),
        text,
        completed: false,
    }
    //setTasks([...tasks, newTask])
    setTasks(tasks.concat(newTask))
}
//Зміна стану виконання задачі
const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
}
//Видалення задачі
const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
}
//Фільтрація по пошуку задачі
const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchQuery.toLowerCase()));

return (
    <div className="app-container">
      <h1>Мій список справ на {new Date().toLocaleDateString()}</h1>
       <TodoForm addTask={addTask} />
        <TodoSearch onSearch={setSearchQuery} />
       <TodoList tasks = {filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
)
}

export default App
