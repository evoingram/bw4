const router = require('express').Router();

const Users = require('./userModel.js');
const restricted = require('../auth/restriction.js');

// get list of users
router.get('/', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});

// get individual user
router.get('/:id', restricted, (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(404).json({ message: 'The user with the specified id does not exist.' });
	} else {
		Users.findById(id)
			.then(user => {
				res.status(201).json(user);
			})
			.catch(err => {
				res.status(500).json({ message: 'The user information could not be retrieved.' });
			});
	}
});

/*
-- delete user
DELETE FROM Users where Users.usersid = '';
*/

router.delete('/:id', restricted, (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(404).json({ message: 'The user with the specified ID does not exist.' });
	}
	Users.remove(id)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			res.status(500).json({ message: 'The user could not be removed' });
		});
});

/*
-- update own user profile
    UPDATE Users.password = "" WHERE Users.usersid="";
    UPDATE Users.email = "" WHERE Users.usersid="";
    UPDATE Users.name = "" WHERE Users.usersid="";
*/
router.put('/:usersid', (req, res) => {
	const usersid = req.params.usersid;
	const user = req.body;

	Users.update(user, usersid)
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: `Could not find user with given id ${usersid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update user' });
		});
});
/*
-- remove helper status
    DELETE FROM Userroles where Userroles.usersid='' && WHERE Userroles.rolesid='';
*/

router.put('/helpers/:usersid', (req, res) => {
	const usersid = req.params.usersid;

	Users.removeHStatus(usersid)
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: 'Could not find user with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update user' });
		});
});
/*
-- add helper status
    INSERT INTO Userroles (usersid, rolesid) VALUES ('', '');
*/
router.put('/helpers/:usersid', (req, res) => {
	const usersid = req.params.usersid;
	const updatedUser = req.body;

	Users.addAsHelper(updatedUser)
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: 'Could not find user with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update user' });
		});
});

/*
    -- to view all helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
		ORDER BY Users.usersid;
*/

router.get('/helpers', restricted, (req, res) => {
	Users.findHelpers()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});
/*
    -- to view all students: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
		ORDER BY Users.usersid;
*/

router.get('/students', restricted, (req, res) => {
	Users.findStudents()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});
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
router.get('/helperstudents', restricted, (req, res) => {
	Users.findHStudents()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});

module.exports = router;
