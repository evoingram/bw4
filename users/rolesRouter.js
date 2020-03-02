const router = require('express').Router();

const Roles = require('./rolesModel.js');
const restricted = require('../auth/restriction.js');

// get all roles
router.get('/', restricted, (req, res) => {
	Roles.find()
		.then(roles => {
			res.status(200).json(roles);
		})
		.catch(err => res.send(err));
});

// get individual role
router.get('/:rolesid', restricted, (req, res) => {
	const rolesid = req.params.rolesid;
	if (!rolesid) {
		res.status(404).json({ message: 'The role with the specified id does not exist.' });
	} else {
		Roles.findById(rolesid)
			.then(role => {
				res.status(201).json(role);
			})
			.catch(err => {
				res.status(500).json({ message: 'The role information could not be retrieved.' });
			});
	}
});

// create role

router.post('/', restricted, (req, res) => {
	const roleName = req.body.rolename;

	Roles.addRole(roleName)
		.then(role => {
			res.status(201).json(role);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new role' });
		});
});

// update role

router.put('/:rolesid', restricted, (req, res) => {
	const rolesid = req.params.rolesid;
	const updatedRolename = { rolename: req.body.rolename };

	Roles.updateRole(rolesid, updatedRolename)
		.then(role => {
			if (role) {
				res.json(role);
			} else {
				res.status(404).json({ message: `Could not find role with given id ${rolesid}` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update role' });
		});
});

// delete role
router.delete('/:rolesid', restricted, (req, res) => {
	const rolesid = req.params.rolesid;
	if (!rolesid) {
		res.status(404).json({ message: 'The role with the specified ID does not exist.' });
	}
	Roles.remove(rolesid)
		.then(role => {
			res.json(role);
		})
		.catch(err => {
			res.status(500).json({ message: 'The role could not be removed' });
		});
});

module.exports = router;
