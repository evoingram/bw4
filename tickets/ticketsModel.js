const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db('tickets').select('ticketsid', 'username', 'email');
}

function findBy(filter) {
	return db('tickets').where(filter);
}

async function add(user) {
	const [ticketsid] = await db('tickets').insert(user);
	return findById(ticketsid);
}

function findById(id) {
	return db('tickets')
		.select('ticketsid', 'username', 'email')
		.where({ ticketsid: ticketsid })
		.first();
}

function update(ticketsid, user) {
	return db('tickets')
		.where('ticketsid', Number(ticketsid))
		.update(user);
}

function remove(ticketsid) {
	return db('tickets')
		.where('ticketsid', Number(ticketsid))
		.del();
}
