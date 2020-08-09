import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoPreview extends Component {
    handleClick = () => {
        this.props.onTodoClick(this.props.id);
    };

    render () {
        return (
            <div className="todo-item-preview" onClick={ this.handleClick }>
                <div className="todo-preview-title">
                    { this.props.title }
                </div>
                <div className="todo-preview-content">
                    { this.props.content }
                </div>
            </div>
        );
    }
}

TodoPreview.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoPreview;
