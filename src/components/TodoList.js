import React from 'react';
import PropTypes from 'prop-types';
import TodoPreview from './TodoPreview';

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <div>
            {
                Object.keys(todos).map(todoId =>
                    <TodoPreview
                        onTodoClick={ onTodoClick }
                        key={ todoId } { ...todos[todoId] } />
                )
            }
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.object,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
