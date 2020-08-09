import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        todoListClick: PropTypes.func
    };

    render () {
        return (
            <div className="todo-item">
                <div className="todo-content">
                    <div> { this.props.title } </div>
                    <div> { this.props.content } </div>
                </div>
                <div className="home-link"
                    onClick={ this.props.todoListClick }>
                    TodoList
                </div>
            </div>
        );
    }
}

export default Todo;
