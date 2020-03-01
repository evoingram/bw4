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
	return db('roles').select('rolesid', 'username', 'email');
}

function findBy(filter) {
	return db('roles').where(filter);
}

async function add(user) {
	const [rolesid] = await db('roles').insert(user);
	return findById(rolesid);
}

function findById(id) {
	return db('roles')
		.select('rolesid', 'username', 'email')
		.where({ rolesid: rolesid })
		.first();
}

function update(rolesid, user) {
	return db('roles')
		.where('rolesid', Number(rolesid))
		.update(user);
}

function remove(rolesid) {
	return db('roles')
		.where('rolesid', Number(rolesid))
		.del();
}
