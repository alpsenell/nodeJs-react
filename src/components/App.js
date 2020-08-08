import React from 'react';
import axios from 'axios';
import Header from './Header';
import TodoList from './TodoList';

class App extends React.Component {
    state = {
        pageHeader: 'Todo List',
        todos: []
    };

    componentDidMount() {
        axios.get('/api/get-todos')
            .then( response => {
                this.setState({
                    todos: response.data.todos
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render () {
        return (
            <div className="App">
                <Header message={ this.state.pageHeader } />
                <TodoList todos={ this.state.todos }/>
            </div>
        );
    }
}

export default App;
