import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <div>
            {
                todos.map(todo =>
                    <Todo key={todo.id} {...todo} />
                )
            }
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array
};

export default TodoList;
