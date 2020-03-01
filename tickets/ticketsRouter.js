const router = require('express').Router();

const Users = require('./ticketsModel.js');
const restricted = require('../auth/restriction.js');

// get list of all tickets
router.get('/', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});
// get list of tickets by studentid
// SELECT * FROM Tickets WHERE Tickets.studentid=studentid;
router.get('/students/:studentid/tickets', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});

/*
-- As a helper I want to be able to login and see a list of open tickets. 
    -- get list of tickets in queue
        SELECT * FROM Tickets WHERE Tickets.status="queue";
*/
/*
	-- Allow the ability to subscribe to the Queue in slack to be notified if someone opens a ticket.
		-- SQL to get list of tickets 
			SELECT * FROM Tickets WHERE Tickets.status = 'queue';
*/

router.get('/queue', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});
router.get('/tickets/queue', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.send(err));
});

/*
    -- get list of tickets by helperid
        SELECT * FROM Tickets WHERE Tickets.helperid=helperid;

*/

// view individual ticket
// SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;

/*
	-- SQL to get individual ticket
		SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;
*/
router.get('/tickets/:id', restricted, (req, res) => {
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

-- delete ticket
    DELETE FROM Tickets where Tickets.ticketsid='';
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

// As a student I want to be able to create a new help ticket with a title, description, what I've tried and a category (i.e. React).
// INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");
/*
-----------------------------------------------------------
-- How to get a three:
-----------------------------------------------------------
*/

/*
-- Build an integrated slack-bot that allows students to submit help tickets through slack. 
        -- SQL to insert into Tickets newTicket
            INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");
*/
/*
        -- SQL to insert into Tickets newTicket
            INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");
*/

router.post('/', (req, res) => {
	const resourceData = req.body;

	Cohorts.addCohort(resourceData)
		.then(cohort => {
			res.status(201).json(cohort);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new cohort' });
		});
});

module.exports = router;
