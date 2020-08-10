import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoPreview extends Component {
    handleClick = () => {
        console.log('handle todo click');
        // this.props.onTodoClick(this.props._id);
    };

    handleDelete = () => {
        console.log('handle delete click');
        this.props.onDeleteClick(this.props._id);
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
                <div className="todo-preview-delete"
                    onClick={ this.handleDelete }></div>
            </div>
        );
    }
}

TodoPreview.propTypes = {
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
};

export default TodoPreview;
