const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const usersRouter = require('../users/userRouter');
const loginRouter = require('../auth/loginRouter.js');
const registerRouter = require('../auth/registerRouter.js');
const statusesRouter = require('../tickets/statusesRouter');
const rolesRouter = require('../users/rolesRouter');
const ticketsRouter = require('../tickets/ticketsRouter');

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use(cors());

server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);
server.use('/api/users', usersRouter);
server.use('/api/tickets', ticketsRouter);
server.use('/api/statuses', statusesRouter);
server.use('/api/roles', rolesRouter);

server.get('/', (req, res) => {
	res.send('<h1>🎣</h1>');
});

module.exports = server;
