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
	const [id] = await db('users').insert(user, 'usersid');
	return findById(id);
}

function findById(id) {
	return db('users')
		.select('usersid', 'username', 'email')
		.where({ id })
		.first();
}

function update(id, user) {
	return db('users')
		.where('usersid', Number(id))
		.update(user);
}

function remove(id) {
	return db('users')
		.where('usersid', Number(id))
		.del();
}
