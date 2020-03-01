const router = require('express').Router();

const Users = require('./userModel.js');
const restricted = require('../auth/restriction.js');

router.get('/', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});

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
router.put('/:cohortsid', (req, res) => {
	const cohortsid = req.params.cohortsid;
	const cohortName = req.body.cohort;
	const updatedCohort = { cohortsid: cohortsid, cohort: cohortName };

	Cohorts.updateCohort(updatedCohort, cohortsid)
		.then(cohort => {
			if (cohort) {
				res.json(cohort);
			} else {
				res.status(404).json({ message: 'Could not find cohort with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update cohort' });
		});
});
/*
-- remove helper status
    DELETE FROM Userroles where Userroles.usersid='' && WHERE Userroles.rolesid='';
*/

router.put('/:cohortsid', (req, res) => {
	const cohortsid = req.params.cohortsid;
	const cohortName = req.body.cohort;
	const updatedCohort = { cohortsid: cohortsid, cohort: cohortName };

	Cohorts.updateCohort(updatedCohort, cohortsid)
		.then(cohort => {
			if (cohort) {
				res.json(cohort);
			} else {
				res.status(404).json({ message: 'Could not find cohort with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update cohort' });
		});
});
/*
-- add helper status
    INSERT INTO Userroles (usersid, rolesid) VALUES ('', '');
*/
router.put('/:cohortsid', (req, res) => {
	const cohortsid = req.params.cohortsid;
	const cohortName = req.body.cohort;
	const updatedCohort = { cohortsid: cohortsid, cohort: cohortName };

	Cohorts.updateCohort(updatedCohort, cohortsid)
		.then(cohort => {
			if (cohort) {
				res.json(cohort);
			} else {
				res.status(404).json({ message: 'Could not find cohort with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update cohort' });
		});
});

module.exports = router;
