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
	return db('statuses').select('statusesid', 'status', 'email');
}

function findBy(filter) {
	return db('statuses').where(filter);
}

async function add(user) {
	const [statusesid] = await db('statuses').insert(user);
	return findById(statusesid);
}

function findById(id) {
	return db('statuses')
		.select('statusesid', 'status', 'email')
		.where({ statusesid: statusesid })
		.first();
}

function update(statusesid, user) {
	return db('statuses')
		.where('statusesid', Number(statusesid))
		.update(user);
}

function remove(statusesid) {
	return db('statuses')
		.where('statusesid', Number(statusesid))
		.del();
}
