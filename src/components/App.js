import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import TodoList from './TodoList';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends Component {
    state = {
        pageHeader: 'Todo List',
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

    fetchTodo = (todoId) => {
        pushState(
            { currentTodoId: todoId },
            `/todo/${ todoId }`
        );
    };

    render () {
        return (
            <div className="App">
                <Header message={ this.state.pageHeader }/>
                <TodoList
                    onTodoClick={ this.fetchTodo }
                    todos={ this.state.todos }/>
            </div>
        );
    }
}

export default App;
