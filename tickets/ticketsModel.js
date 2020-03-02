const db = require('../data/dbConfig');

module.exports = {
	addTicket,
	find,
	findBy,
	findById,
	updateTicket,
	remove
};

//  .join(SELECT Status from Statuses WHERE Statuses.statusesid = tickets.id) AS "status")
function find() {
	return db('tickets').select('ticketsid', 'statusesid', 'helperid', 'studentid', 'title', 'description', 'category');
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

async function addTicket(newTicket) {
	const [ticketsid] = await db('tickets').insert(newTicket, 'ticketsid');
	return findById(ticketsid.ticketsid);
}

/*
	-- SQL to get individual ticket
		SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;
*/
// view individual ticket
// SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;

function findById(ticketsid) {
	return db('tickets')
		.select('ticketsid', 'statusesid', 'helperid', 'studentid', 'title', 'description', 'category')
		.where({ ticketsid: ticketsid })
		.first();
}

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

// update ticket
function updateTicket(ticketsid, ticket) {
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
