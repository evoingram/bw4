const db = require('../data/dbConfig');

module.exports = {
	addRole,
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

async function addRole(role) {
	const [rolesid] = await db('roles').insert({ rolename: role.rolename }, 'rolesid');
	return findById(rolesid);
}

function findById(rolesid) {
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
