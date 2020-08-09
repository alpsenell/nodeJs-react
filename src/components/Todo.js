import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    render () {
        return (
            <div className="todo-item">
                <div> { this.props.title } </div>
                <div> { this.props.content } </div>
                <div> { this.props.description } </div>
            </div>
        );
    }
}

export default Todo;
