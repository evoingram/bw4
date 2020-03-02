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
	return db('statuses').select('statusesid', 'status');
}

function findBy(filter) {
	return db('statuses').where(filter);
}

async function add(status) {
	const [statusesid] = await db('statuses').insert(status, 'statusesid');
	return findById(statusesid);
}

function findById(id) {
	return db('statuses')
		.select('statusesid', 'status')
		.where({ statusesid: statusesid })
		.first();
}

function update(statusesid, status) {
	return db('statuses')
		.where('statusesid', Number(statusesid))
		.update(status);
}

function remove(statusesid) {
	return db('statuses')
		.where('statusesid', Number(statusesid))
		.del();
}
