import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    response.send({ data: [] });
});

router.get('/get-alp', (request, response) => {
    response.send({ data: ['alp'] });
});

export default router;