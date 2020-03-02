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
	return db('roles').select('rolesid', 'rolename');
}

function findBy(filter) {
	return db('roles').where(filter);
}

async function add(role) {
	const [rolesid] = await db('roles').insert(role);
	return findById(rolesid);
}

function findById(id) {
	return db('roles')
		.select('rolesid', 'rolename')
		.where({ rolesid: rolesid })
		.first();
}

function update(rolesid, role) {
	return db('roles')
		.where('rolesid', Number(rolesid))
		.update(role);
}

function remove(rolesid) {
	return db('roles')
		.where('rolesid', Number(rolesid))
		.del();
}
