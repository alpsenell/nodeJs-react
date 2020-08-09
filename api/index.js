import express from 'express';
import data from '../src/testData.json';

const router = express.Router();

router.get('/', (request, response) => {
    response.send({ data: [] });
});

const alteredTodos = data.todos.reduce((obj, todo) => {
    obj[todo.id] = todo;

    return obj;
}, {});

router.get('/get-todos', (request, response) => {
    response.send({
        todos: alteredTodos
    });
});

export default router;
