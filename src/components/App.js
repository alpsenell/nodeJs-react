import React, { Component } from 'react';
import axios from 'axios';
import * as api from '../api';
import Header from './Header';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
    state = {
        todos: []
    };

    componentDidMount () {
        axios.get('/api/get-todos')
            .then(response => {
                this.setState({
                    todos: response.data.todos
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    fetchTodoList = () => {
        api.fetchAllTodos().then(todos => {
            this.setState({
                currentTodoId: null,
                todos
            });
        });
    };

    remainingTodoCount = () => this.state.todos.filter(todo => !todo.status).length;

    deleteTodo = (todoId) => {
        axios.delete(`/api/todo/${ todoId }`)
            .then(response => {
                if (response.status === 200) {
                    this.fetchTodoList();
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    checkTodoAlreadyExist = title => this.state.todos.some(todo => todo.title === title);

    addTodoClick = (todo) => {
        if (this.checkTodoAlreadyExist(todo.title)) {
            return false;
        }

        axios.post('/api/todo', todo)
            .then(response => {
                if (response.status === 201) {
                    this.fetchTodoList();
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    handleTodoCheck = (todoId) => {
        const index = this.state.todos.findIndex(todo => todo._id === todoId);

        axios.patch(`/api/todo/${ todoId }`,
            [{ propName: 'status', value: !this.state.todos[index].status }]
        )
            .then(response => {
                if (response.status === 200) {
                    this.fetchTodoList();
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    render () {
        return (
            <div className="App">
                <Header remainingTodoCount={ this.remainingTodoCount() }/>
                <AddTodo addTodoClick={ this.addTodoClick }/>
                <TodoList
                    onDeleteClick={ this.deleteTodo }
                    onCheckboxClick={ this.handleTodoCheck }
                    todos={ this.state.todos }/>
            </div>
        );
    }
}

export default App;
