import axios from 'axios';

export const fetchTodo = todoId => {
    return axios.get(`/api/get-todos/${todoId}`)
        .then(response => response.data);
};

export const fetchAllTodos = () => {
    return axios.get('/api/get-todos')
        .then(response => response.data.todos);
};
