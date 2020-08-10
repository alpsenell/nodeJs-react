import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoPreview extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        onDeleteClick: PropTypes.func.isRequired,
        onCheckboxClick: PropTypes.func.isRequired,
    }

    handleDelete = () => {
        this.props.onDeleteClick(this.props._id);
    };

    handleCheck = () => {
        this.props.onCheckboxClick(this.props._id);
    };

    render () {
        return (
            <div className="todo-item-preview">
                <input type="checkbox"
                    id={ `todo-checkbox-${ this.props._id }` }
                    checked={ this.props.status }
                    onChange={ this.handleCheck }/>
                <label htmlFor={ `todo-checkbox-${ this.props._id }` }></label>
                <div className="todo-preview-title">
                    { this.props.title }
                </div>
                <div className="todo-preview-delete"
                    onClick={ this.handleDelete }></div>
            </div>
        );
    }
}

export default TodoPreview;
