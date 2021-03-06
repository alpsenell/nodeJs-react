import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import apiRouter from './api/index';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get(['/', '/todo/:todoId'], (request, response) => {
    response.render('index');
});

server.use(express.static('public'));
server.use(bodyParser.json());
server.use('/api', apiRouter);

server.listen(config.port, config.host, () => {
    console.info('Express listening on port, ', config.port);
});
