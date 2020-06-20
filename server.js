import express from 'express';
import config from './config';
import apiRouter from './api/index';

const server = express();

server.get('/', (request, response) => {
    response.send('hello');
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
    console.info('EXpress listening on port, ', config.port)
});