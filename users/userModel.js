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
	return db('users').select('usersid', 'username', 'email');
}

function findBy(filter) {
	return db('users').where(filter);
}

async function add(user) {
	const [usersid] = await db('users').insert(user);
	return findById(usersid);
}

function findById(id) {
	return db('users')
		.select('usersid', 'username', 'email')
		.where({ usersid: usersid })
		.first();
}

function update(usersid, user) {
	return db('users')
		.where('usersid', Number(usersid))
		.update(user);
}

function remove(usersid) {
	return db('users')
		.where('usersid', Number(usersid))
		.del();
}
