import express from 'express';
import config from './config';
import apiRouter from './api/index';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
    response.render('index');
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
    console.info('EXpress listening on port, ', config.port)
});