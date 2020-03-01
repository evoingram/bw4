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
/*
    -- to view all helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
		ORDER BY Users.usersid;
*/
function findHelpers() {
	return db('users')
		.select('usersid', 'username', 'email')
		.join('userroles', 'userroles.usersid', 'users.usersid')
		.join('Roles', 'roles.rolesid', 'userroles.rolesid')
		.where({ rolename: 'helper' });
}

/*
    -- to view all students: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
		ORDER BY Users.usersid;
*/

function findStudents() {
	return db('users')
		.select('usersid', 'username', 'email')
		.join('userroles', 'userroles.usersid', 'users.usersid')
		.join('Roles', 'roles.rolesid', 'userroles.rolesid')
		.where({ rolename: 'student' });
}

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
function findHStudents() {
	return db('users')
		.select('usersid', 'username', 'email')
		.join('userroles', 'userroles.usersid', 'users.usersid')
		.join('roles', 'roles.rolesid', 'userroles.rolesid')
		.where({ 'roles.rolename': 'student' })
		.union(function() {
			this.select('*')
				.from('users')
				.select('usersid', 'username', 'email')
				.join('userroles', 'userroles.usersid', 'users.usersid')
				.join('roles', 'roles.rolesid', 'userroles.rolesid')
				.where({ 'roles.rolename': 'helper' });
		});
}

function findBy(filter) {
	return db('users').where(filter);
}

async function add(user) {
	const [usersid] = await db('users').insert(user);
	return findById(usersid);
}

function findById(usersid) {
	return db('users')
		.select('usersid', 'username', 'email')
		.where({ usersid: usersid })
		.first();
}

/*
-- update own user profile
    UPDATE Users.password = "" WHERE Users.usersid="";
    UPDATE Users.email = "" WHERE Users.usersid="";
    UPDATE Users.name = "" WHERE Users.usersid="";
*/
/*
-- remove helper status
    DELETE FROM Userroles where Userroles.usersid='' && WHERE Userroles.rolesid='';
*/

/*
-- add helper status
    INSERT INTO Userroles (usersid, rolesid) VALUES ('', '');
*/

function update(usersid, user) {
	return db('users')
		.where('usersid', Number(usersid))
		.update(user);
}

/*
-- delete user
DELETE FROM Users where Users.usersid = '';
*/
function remove(usersid) {
	return db('users')
		.where('usersid', Number(usersid))
		.del();
}
