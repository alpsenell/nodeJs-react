import React, { Component } from 'react';
import axios from 'axios';
import * as api from '../api';
import Header from './Header';
import TodoList from './TodoList';
import Todo from './Todo';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends Component {
    state = {
        todos: {}
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

    fetchTodo = (todoId) => {
        pushState(
            { currentTodoId: todoId },
            `/todo/${ todoId }`
        );

        api.fetchTodo(todoId).then(todo => {
            this.setState({
                currentTodoId: todo.id,
                todos: {
                    ...this.state.todos,
                    [todo.id]: todo
                }
            });
        });
    };

    fetchTodoList = () => {
        pushState(
            { currentTodoId: null },
            '/'
        );

        api.fetchAllTodos().then(todos => {
            this.setState({
                currentTodoId: null,
                todos
            });
        });
    };

    pageHeader = () => {
        if (this.state.currentTodoId) {
            return this.currentTodo().title;
        }

        return 'Todo List';
    };

    currentTodo = () => {
        return this.state.todos[this.state.currentTodoId];
    };

    currentContent = () => {
        if (this.state.currentTodoId) {
            return <Todo
                todoListClick={ this.fetchTodoList }
                { ...this.currentTodo() }/>;
        }

        return <TodoList
            onTodoClick={ this.fetchTodo }
            todos={ this.state.todos }/>;
    }

    render () {
        return (
            <div className="App">
                <Header message={ this.pageHeader() }/>
                { this.currentContent() }
            </div>
        );
    }
}

export default App;
