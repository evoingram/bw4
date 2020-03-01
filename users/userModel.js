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

/*
-- delete user
DELETE FROM Users where Users.usersid = '';
*/

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
