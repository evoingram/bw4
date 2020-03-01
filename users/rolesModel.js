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

/*
    -- to view all helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
		ORDER BY Users.usersid;
*/

/*
    -- to view all students: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
		ORDER BY Users.usersid;
		*/

/*
    -- to view all students who are also helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
        ORDER BY Users.usersid
        UNION 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
        ORDER BY Users.usersid;
*/
