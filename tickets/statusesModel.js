const db = require('../data/dbConfig');

module.exports = {
	addStatus,
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

async function addStatus(statusname) {
	const [statusesid] = await db('statuses').insert({ status: statusname }, 'statusesid');
	return findById(statusesid);
}

function findById(statusesid) {
	return db('statuses')
		.select('statusesid', 'status')
		.where({ statusesid: statusesid })
		.first();
}

function update(statusesid, statusName) {
	return db('statuses')
		.where('statusesid', Number(statusesid))
		.update({ status: statusName });
}

function remove(statusesid) {
	return db('statuses')
		.where('statusesid', Number(statusesid))
		.del();
}
