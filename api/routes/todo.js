import express from 'express';
import mongoose from 'mongoose';
import Todo from '../models/todo';

const router = express.Router();

router.get('/get-todos', (request, response) => {
    Todo.find()
        .exec()
        .then(todos => {
            if (todos) {
                response.status(200).json({ todos });
            } else {
                response.status(404).json({ message: 'There are no data in the Database' });
            }
        })
        .catch(error => {
            response.status(500).json({ error });
        });
});

router.post('/todo', (request, response) => {
    const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        title: request.body.title,
        content: request.body.content
    });

    todo.save()
        .then(result => {
            // eslint-disable-next-line no-console
            console.log(result);

            response.status(201).json({
                message: 'Handling POST requests to /todos',
                createdTodo: todo
            });
        })
        .catch(error => {
            // eslint-disable-next-line no-console
            console.log(error);

            response.status(500).json({
                error
            });
        });
});


router.get('/todo/:todoId', (request, response) => {
    const id = request.params.todoId;

    Todo.findById(id)
        .exec()
        .then(todo => {
            if (todo) {
                response.status(200).json({ todo });
            } else {
                response.status(404).json({ message: 'No valid entry found for: ', id });
            }
        })
        .catch(error => {
            response.status(500).json({ error });
        });
});

router.delete('/todo/:todoId', (request, response) => {
    const id = request.params.todoId;

    Todo.remove({ _id: id }).exec()
        .then(result => {
            response.status(200).json(result);
        })
        .catch(error => {
            response.status(500).json(error);
        });
});

router.patch('/todo/:todoId', (request, response) => {
    const id = request.params.todoId;
    const updateOperations = {};

    for (const operations of request.body) {
        updateOperations[operations.propName] = operations.value;
    }

    Todo.update(
        { _id: id },
        { $set: updateOperations }
    ).exec()
        .then(result => {
            response.status(200).json(result);
        })
        .catch(error => {
            response.status(500).json(error);
        });
});

export default router;
