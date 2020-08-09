import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import TodoList from './TodoList';
import Todo from './Todo';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends Component {
    state = {
        pageHeader: 'TodoPreview List',
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

        this.setState({
            pageHeader: this.state.todos[todoId].title,
            currentTodoId: todoId
        });
    };

    currentContent = () => {
        if (this.state.currentTodoId) {
            return <Todo { ...this.state.todos[this.state.currentTodoId] }/>;
        }

        return <TodoList
            onTodoClick={ this.fetchTodo }
            todos={ this.state.todos }/>;
    }

    render () {
        return (
            <div className="App">
                <Header message={ this.state.pageHeader }/>
                { this.currentContent() }
            </div>
        );
    }
}

export default App;
