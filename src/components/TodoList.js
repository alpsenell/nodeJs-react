import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div>
            {
                todos.map(todo =>
                    <Todo
                        onTodoClick={ onTodoClick }
                        key={ todo.id } { ...todo } />
                )
            }
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
