import React, { useState } from 'react'

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        if (newTask.trim() === "") {
            alert("Please enter a task.");
            return;
        }
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    }
    
    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }
    
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const moveTaskUp = (index) => {
        if (index === 0) return; // Can't move the first task up
        const newTasks = [...tasks];
        const temp = newTasks[index - 1];
        newTasks[index - 1] = newTasks[index];
        newTasks[index] = temp;
        setTasks(newTasks);
    }

    const moveTaskDown = (index) => {
        if (index === tasks.length - 1) return;
        const newTasks = [...tasks];
        const temp = newTasks[index + 1];
        newTasks[index + 1] = newTasks[index];
        newTasks[index] = temp;
        setTasks(newTasks);
    }
    return (
        <div className='todo-list'>
            <h1>To-Do-List</h1>
            <div className='input-container'>
                <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'completed' : ''}>
                        <span 
                            className='text' 
                            onClick={() => toggleTask(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            {task.text}
                        </span>
                        <div className='button'>
                            <button className='move-up-button' onClick={() => moveTaskUp(index)} >☝</button>
                            <button className='move-down-button' onClick={() => moveTaskDown(index)}>👇</button>
                            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
