import React, { useEffect, useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    },[])
    return (
        <div>
            <h1>Todo: {todos.length}</h1>
            {
                todos.map(todo => <p>Title: {todo.title}</p>)
            }
        </div>
    );
};

export default Todos;