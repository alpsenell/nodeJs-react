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

router.get('/get-todos/:todoId', (request, response) => {
    let todo = alteredTodos[request.params.todoId];

    todo.description = 'Lorem Ipsum';

    response.send(todo);
});

export default router;
