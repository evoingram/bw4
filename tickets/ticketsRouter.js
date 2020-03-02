const router = require('express').Router();

const Tickets = require('./ticketsModel.js');
const restricted = require('../auth/restriction.js');

// get list of all tickets
router.get('/', restricted, (req, res) => {
	Tickets.find()
		.then(tickets => {
			res.status(200).json(tickets);
		})
		.catch(err => res.send(err));
});

// get list of tickets by studentid
// SELECT * FROM Tickets WHERE Tickets.studentid=studentid;
router.get('/students/:studentid/tickets', restricted, (req, res) => {
	Tickets.findBy({ studentid: req.params.studentid })
		.then(tickets => {
			res.status(200).json(tickets);
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
	Tickets.findBy({ statusesid: 1 })
		.then(tickets => {
			res.status(200).json(tickets);
		})
		.catch(err => res.send(err));
});

// resolved tickets

router.get('/resolved', restricted, (req, res) => {
	Tickets.findBy({ statusesid: 2 })
		.then(tickets => {
			res.status(200).json(tickets);
		})
		.catch(err => res.send(err));
});

/*
    -- get list of tickets by helperid
        SELECT * FROM Tickets WHERE Tickets.helperid=helperid;

*/
router.get('/helpers/:helperid/tickets', restricted, (req, res) => {
	Tickets.findBy({ helperid: req.params.helperid })
		.then(tickets => {
			res.status(200).json(tickets);
		})
		.catch(err => res.send(err));
});

// view individual ticket
// SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;

/*
	-- SQL to get individual ticket
		SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;
*/
router.get('/:ticketsid', restricted, (req, res) => {
	const ticketsid = req.params.ticketsid;
	if (!ticketsid) {
		res.status(404).json({ message: 'The ticket with the specified id does not exist.' });
	} else {
		Tickets.findById(ticketsid)
			.then(ticket => {
				res.status(201).json(ticket);
			})
			.catch(err => {
				res.status(500).json({ message: 'The ticket information could not be retrieved.' });
			});
	}
});

/*

-- delete ticket
    DELETE FROM Tickets where Tickets.ticketsid='';
*/
router.delete('/:ticketsid', restricted, (req, res) => {
	const ticketsid = req.params.ticketsid;
	if (!ticketsid) {
		res.status(404).json({ message: 'The ticket with the specified ID does not exist.' });
	}
	Tickets.remove(ticketsid)
		.then(ticket => {
			res.json(ticket);
		})
		.catch(err => {
			res.status(500).json({ message: 'The ticket could not be removed' });
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

router.post('/', restricted, (req, res) => {
	const newTicket = req.body;

	Tickets.addTicket(newTicket)
		.then(ticket => {
			res.status(201).json(ticket);
		})
		.catch(err => {
			res.status(500).json({ message: `Failed to create new ticket:  ${err}` });
		});
});

/*
-- As a helper I want to be able to assign a ticket to myself by clicking a "help student" button.
    -- SQL to update ticket.helperid to current helperid
        UPDATE Tickets.helperid = "" && Ticket.status="" WHERE Tickets.ticketsid="";
*/

/*

-- As a helper I want to be able to mark the ticket as "resolved", or re-assign the ticket back to the queue if I cannot resolve the ticket.
    -- SQL to update ticket.status to "resolved" or "queue" && ticket.helperid=""
        UPDATE Tickets.helperid = "" && Ticket.status="resolved" WHERE Tickets.ticketsid="";
        UPDATE Tickets.helperid = "" && Ticket.status="queue" WHERE Tickets.ticketsid="";

*/
router.put('/:ticketsid', restricted, (req, res) => {
	const ticketsid = req.params.ticketsid;
	const helperid = req.body.helperid;
	const ticketStatus = req.body.status;
	const updatedTicket = { helperid: helperid, status: ticketStatus };

	Tickets.update(updatedTicket, ticketsid)
		.then(ticket => {
			if (ticket) {
				res.json(ticket);
			} else {
				res.status(404).json({ message: 'Could not find ticket with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to update ticket' });
		});
});

module.exports = router;
