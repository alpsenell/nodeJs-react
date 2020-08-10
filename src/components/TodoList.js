import React from 'react';
import PropTypes from 'prop-types';
import TodoPreview from './TodoPreview';

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => {
    return (
        <div>
            {
                todos.map(todo =>
                    <TodoPreview
                        onTodoClick={ onTodoClick }
                        onDeleteClick={ onDeleteClick }
                        key={ todo._id } { ...todo } />
                )
            }
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
};

export default TodoList;
