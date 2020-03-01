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

// delete status

router.delete('/:id', restricted, (req, res) => {
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
