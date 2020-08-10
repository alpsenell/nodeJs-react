import React, { Component } from 'react';
import axios from 'axios';
import * as api from '../api';
import Header from './Header';
import TodoList from './TodoList';
import Todo from './Todo';
import AddTodo from './AddTodo';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

const onPopState = handler => {
    window.onpopstate = handler;
};

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

        onPopState(event =>
            this.setState({
                currentTodoId: (event.state || {}).currentTodoId
            })
        );
    }

    componentWillUnmount () {
        onPopState(null);
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

    remainingTodoCount = () => this.state.todos.length;

    currentTodo = () => {
        return this.state.todos[this.state.currentTodoId];
    };

    deleteTodo = (todoId) => {
        axios.delete(`/api/todo/${todoId}`)
            .then(response => {
                if (response.status === 200) {
                    this.fetchTodoList();
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    currentContent = () => {
        if (this.state.currentTodoId) {
            return <Todo
                todoListClick={ this.fetchTodoList }
                { ...this.currentTodo() }/>;
        }

        return <TodoList
            onTodoClick={ this.fetchTodo }
            onDeleteClick={ this.deleteTodo }
            todos={ this.state.todos }/>;
    }

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

    render () {
        return (
            <div className="App">
                <Header remainingTodoCount={ this.remainingTodoCount() }/>
                <AddTodo addTodoClick={ this.addTodoClick }/>
                { this.currentContent() }
            </div>
        );
    }
}

export default App;
