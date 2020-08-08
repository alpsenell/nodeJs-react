import React from 'react';

const Todo = (todo) => (
    <div className="todo-item">
        <div className="todo-title">
            { todo.title }
        </div>
        <div className="todo-content">
            { todo.content }
        </div>
    </div>
);

export default Todo;
