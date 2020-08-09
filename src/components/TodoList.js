import React from 'react';
import PropTypes from 'prop-types';
import TodoPreview from './TodoPreview';

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div>
            {
                todos.map(todo =>
                    <TodoPreview
                        onTodoClick={ onTodoClick }
                        key={ todo._id } { ...todo } />
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
