const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findStudents,
	findHelpers,
	findHStudents,
	addAsHelper,
	removeHStatus,
	updateUser,
	remove
};

function find() {
	return db('users').select('usersid', 'name', 'email');
}
/*
    -- to view all helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.rolename='helper'
		ORDER BY Users.usersid;
*/
function findHelpers() {
	return db('users')
		.select('*')
		.from('users')
		.join('userroles', 'userroles.usersid', 'users.usersid')
		.where({ 'userroles.rolesid': 1 });
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
		.select('*')
		.from('users')
		.join('userroles', 'userroles.usersid', 'users.usersid')
		.where({ 'userroles.rolesid': 2 });
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
		.select('*')
		.from('users')
		.join('userroles', 'userroles.usersid', 'users.usersid')
		.where({ 'userroles.rolesid': 2 })
		.union(function() {
			db('users')
				.select('usersid', 'name', 'email')
				.from('users')
				.join('userroles', 'userroles.usersid', 'users.usersid')
				.where({ 'userroles.rolesid': 1 });
		});
}

function findBy(filter) {
	return db('users').where(filter);
}

async function add(user) {
	const [usersid] = await db('users').insert(user, 'usersid');
	return findById(usersid);
}

function findById(usersid) {
	return db('users')
		.select('usersid', 'name', 'email')
		.where({ usersid: usersid })
		.first();
}

/*
-- update own user profile
    UPDATE Users.password = "" WHERE Users.usersid="";
    UPDATE Users.email = "" WHERE Users.usersid="";
    UPDATE Users.name = "" WHERE Users.usersid="";
*/
function updateUser(usersid, user) {
	return db('users')
		.where('usersid', Number(usersid))
		.update(user);
}
/*
-- remove helper status
    DELETE FROM Userroles where Userroles.usersid='' && WHERE Userroles.rolesid='';
*/
async function removeHStatus(usersid) {
	[usersid] = await db('userroles')
		.where({ usersid: Number(usersid), rolesid: 1 })
		.delete();
	return findById(usersid);
}

/*
-- add helper/student status
    INSERT INTO Userroles (usersid, rolesid) VALUES ('', '');
*/

async function addAsHelper(rolesid, usersid) {
	const [role] = await db('userroles').insert({ usersid: usersid, rolesid: rolesid });
	return findById(role);
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
