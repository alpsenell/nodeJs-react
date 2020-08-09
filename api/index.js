import express from 'express';
import mongoose from 'mongoose';
import data from '../src/testData.json';
import todoRouter from './routes/todo';

mongoose.connect(
    'mongodb+srv://alp:5NCkoRh60snNv01Y@cluster0.mexia.mongodb.net/alp?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('Success DB Connection');
});

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

export default todoRouter;
