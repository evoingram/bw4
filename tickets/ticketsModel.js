const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

//  .join(SELECT Status from Statuses WHERE Statuses.statusesid = tickets.id) AS "status")
function find() {
	return db('tickets').select('ticketsid', 'title', 'description', 'category');
}
/*
-- Allow the ability to subscribe to the Queue in slack to be notified if someone opens a ticket.
	-- SQL to get list of tickets 
		SELECT * FROM Tickets WHERE Tickets.status = 'queue';
*/

/*
-- As a helper I want to be able to login and see a list of open tickets. 
    -- get list of tickets in queue
        SELECT * FROM Tickets WHERE Tickets.status="queue";
    -- get list of tickets by helperid
        SELECT * FROM Tickets WHERE Tickets.helperid=helperid;

*/
// get list of tickets by studentid
// SELECT * FROM Tickets WHERE Tickets.studentid=studentid;
function findBy(filter) {
	return db('tickets').where(filter);
}

/*
	-- SQL to insert into Tickets newTicket
		INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");
*/
/*
	-- Build an integrated slack-bot that allows students to submit help tickets through slack. 
			-- SQL to insert into Tickets newTicket
				INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");
*/

// As a student I want to be able to create a new help ticket with a title, description, what I've tried and a category (i.e. React).
// INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");

async function add(ticket) {
	const [ticketsid] = await db('tickets').insert(ticket);
	return findById(ticketsid);
}

/*
	-- SQL to get individual ticket
		SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;
*/
// view individual ticket
// SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;

function findById(ticketsid) {
	return db('tickets')
		.select('ticketsid', 'title', 'description', 'category')
		.where({ ticketsid: ticketsid })
		.first();
}

// update ticket
function update(ticketsid, ticket) {
	return db('tickets')
		.where('ticketsid', Number(ticketsid))
		.update(ticket);
}

/*

-- delete ticket
    DELETE FROM Tickets where Tickets.ticketsid='';
*/

function remove(ticketsid) {
	return db('tickets')
		.where('ticketsid', Number(ticketsid))
		.del();
}
