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

function update(rolesid, updatedRolename) {
	return db('roles')
		.where({ rolesid: rolesid })
		.update({ rolename: updatedRolename });
}

function remove(rolesid) {
	return db('roles')
		.where('rolesid', Number(rolesid))
		.del();
}
