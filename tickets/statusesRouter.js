const router = require('express').Router();

const Statuses = require('./statusesModel.js');
const restricted = require('../auth/restriction.js');

// get list of statuses
router.get('/', restricted, (req, res) => {
	Statuses.find()
		.then(statuses => {
			res.status(200).json(statuses);
		})
		.catch(err => res.send(err));
});

// get individual status

router.get('/:id', restricted, (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(404).json({ message: 'The status with the specified id does not exist.' });
	} else {
		Statuses.findById(id)
			.then(status => {
				res.status(201).json(status);
			})
			.catch(err => {
				res.status(500).json({ message: 'The status information could not be retrieved.' });
			});
	}
});

// create status

router.post('/', restricted, (req, res) => {
	const newStatus = req.body;

	Statuses.add(newStatus)
		.then(status => {
			res.status(201).json(status);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new status' });
		});
});

// update status

router.put('/:statusesid', restricted, (req, res) => {
	const statusesid = req.params.statusesid;
	const updatedStatus = req.body;

	Statuses.update(updatedStatus, statusesid)
		.then(status => {
			if (status) {
				res.json(status);
			} else {
				res.status(404).json({ message: 'Could not find status with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update status' });
		});
});

// delete status

router.delete('/:statusesid', restricted, (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(404).json({ message: 'The status with the specified ID does not exist.' });
	}
	Statuses.remove(id)
		.then(status => {
			res.json(status);
		})
		.catch(err => {
			res.status(500).json({ message: 'The status could not be removed' });
		});
});

module.exports = router;
