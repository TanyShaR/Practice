import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        let label = `Новая задача #${todos.length + 1}`;

        setTodos([...todos, label]);
    }

    return (
        <div>
            <button onClick={handleAddTodo}>Добавить Задачу</button>

            <ul>
                {
                    todos && todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList