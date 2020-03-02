const db = require('../data/dbConfig');

module.exports = {
	addRole,
	find,
	findBy,
	findById,
	updateRole,
	remove
};

function find() {
	return db('roles').select('rolesid', 'rolename');
}

function findBy(filter) {
	return db('roles').where(filter);
}

async function addRole(roleName) {
	const [rolesid] = await db('roles').insert({ rolename: roleName }, 'rolesid');
	return findById(rolesid);
}

function findById(rolesid) {
	return db('roles')
		.select('rolesid', 'rolename')
		.where({ rolesid: rolesid })
		.first();
}

function updateRole(rolesid, updatedRolename) {
	return db('roles')
		.where('rolesid', Number(rolesid))
		.update(updatedRolename);
}

function remove(rolesid) {
	return db('roles')
		.where('rolesid', Number(rolesid))
		.del();
}
