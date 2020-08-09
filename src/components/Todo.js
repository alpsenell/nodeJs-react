import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    render () {
        return (
            <div className="todo-item">
                <div> { this.props.title } </div>
                <div> { this.props.content } </div>
            </div>
        );
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Todo;
