import React from 'react';
import PropTypes from 'prop-types';
import TodoPreview from './TodoPreview';

const TodoList = ({ todos, onDeleteClick, onCheckboxClick }) => {
    return (
        <div>
            {
                todos.map(todo =>
                    <TodoPreview
                        onDeleteClick={ onDeleteClick }
                        onCheckboxClick={ onCheckboxClick }
                        key={ todo._id } { ...todo } />
                )
            }
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    onDeleteClick: PropTypes.func.isRequired,
    onCheckboxClick: PropTypes.func.isRequired
};

export default TodoList;
