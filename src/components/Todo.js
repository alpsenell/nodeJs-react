import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    handleClick = () => {
        this.props.onTodoClick(this.props.id);
    };

    render () {
        return (
            <div className="todo-item" onClick={ this.handleClick }>
                <div className="todo-title">
                    { this.props.title }
                </div>
                <div className="todo-content">
                    { this.props.content }
                </div>
            </div>
        );
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default Todo;
