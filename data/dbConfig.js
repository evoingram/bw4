const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[environment]);
// knex migrate 20200228204611_users.js
// knex seed:run --specific=00-cleanup.js;knex seed:run --specific=01-users.js;knex seed:run --specific=02-statuses.js;knex seed:run --specific=03-roles.js;knex seed:run --specific=04-tickets.js;knex seed:run --specific=05-userroles.js