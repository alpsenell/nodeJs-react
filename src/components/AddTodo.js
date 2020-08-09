import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    static propTypes = {
        addTodoClick: PropTypes.func.isRequired
    };

    state = {
        todoTitle: ''
    };

    handleChange = (event) => {
        this.setState({
            todoTitle: event.target.value
        });
    };

    handleClick = () => {
        this.props.addTodoClick({
            title: this.state.todoTitle
        });
    };

    render () {
        return (
            <div className="add-todo-container">
                <input type="text" placeholder="What needs to be done?"
                    onChange={ this.handleChange.bind(this) }/>
                <div className="add-button"
                    onClick={ this.handleClick }>Add
                </div>
            </div>
        );
    }
}

export default AddTodo;
