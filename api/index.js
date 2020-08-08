import express from 'express';
import data from '../src/testData.json';

const router = express.Router();

router.get('/', (request, response) => {
    response.send({ data: [] });
});

router.get('/get-todos', (request, response) => {
    response.send({ todos: data.todos });
});

export default router;
