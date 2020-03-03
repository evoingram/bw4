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
		.then(helpers => {
			res.status(200).json(helpers);
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
		.then(students => {
			res.status(200).json(students);
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
		.then(hStudents => {
			res.status(200).json(hStudents);
		})
		.catch(err => res.send(err));
});

// get individual user
router.get('/:usersid', restricted, (req, res) => {
	const usersid = req.params.usersid;
	if (!usersid) {
		res.status(404).json({ message: `The user with the specified ${usersid} does not exist.` });
	} else {
		Users.findById(usersid)
			.then(user => {
				res.status(201).json(user);
			})
			.catch(err => {
				res.status(500).json({ message: `The user information for ${usersid} could not be retrieved.` });
			});
	}
});

/*
-- delete user
DELETE FROM Users where Users.usersid = '';
*/

router.delete('/:usersid', restricted, (req, res) => {
	const usersid = req.params.usersid;
	if (!usersid) {
		res.status(404).json({ message: `The user with the specified ID ${usersid} does not exist.` });
	}
	Users.remove(usersid)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			res.status(500).json({ message: `The user ${usersid} could not be removed` });
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

	Users.updateUser(usersid, user)
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: `Could not find user with given id ${usersid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update user ${usersid}` });
		});
});
/*
-- remove helper status
    DELETE FROM Userroles where Userroles.usersid='' && WHERE Userroles.rolesid='';
*/

router.delete('/helpers/:usersid', (req, res) => {
	const usersid = req.params.usersid;

	Users.removeHStatus(usersid)
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: `Could not find user with given id ${usersid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update user ${usersid}` });
		});
});
/*
-- add helper status
    INSERT INTO Userroles (usersid, rolesid) VALUES ('', '');
*/
router.post('/helpers/:usersid', (req, res) => {
	const usersid = req.params.usersid;
	const rolesid = 1;

	Users.addAsHelper(usersid, rolesid)
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: `Could not find user with given id ${usersid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update user ${usersid}:  ${err}` });
		});
});

/*
-- add student status
    INSERT INTO Userroles (usersid, rolesid) VALUES ('', '');
*/
router.post('/students/:usersid', (req, res) => {
	const usersid = req.params.usersid;
	const rolesid = 2;

	Users.addAsHelper(usersid, rolesid)
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: `Could not find user with given id ${usersid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to update user ${usersid}:  ${err}` });
		});
});
module.exports = router;
