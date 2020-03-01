const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db('statuses').select('statusesid', 'status', 'email');
}

function findBy(filter) {
	return db('statuses').where(filter);
}

async function add(user) {
	const [statusesid] = await db('statuses').insert(user);
	return findById(statusesid);
}

function findById(id) {
	return db('statuses')
		.select('statusesid', 'status', 'email')
		.where({ statusesid: statusesid })
		.first();
}

function update(statusesid, user) {
	return db('statuses')
		.where('statusesid', Number(statusesid))
		.update(user);
}

function remove(statusesid) {
	return db('statuses')
		.where('statusesid', Number(statusesid))
		.del();
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
