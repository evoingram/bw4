const request = require('supertest');

const server = require('../api/server.js');

describe('tickets router', function() {
	it('should run the tests', function() {
		expect(true).toBe(true);
	});

	// get list of all tickets
	// router.get('/', restricted, (req, res) => {Tickets.find
	describe('GET /api/tickets', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/tickets')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return tickets as the router value', function() {
			return request(server)
				.get('/api/tickets')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/tickets')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of tickets (async version)', async function() {
			const res = await request(server).get('/api/tickets');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// get list of tickets by studentid
	// SELECT * FROM Tickets WHERE Tickets.studentid=studentid;
	// router.get('/students/:studentid/tickets', restricted, (req, res) => {Tickets.findBy({ studentid: req.params.studentid })
	describe('GET /api/users/students/:studentid/tickets', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/students/1/tickets')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it("should return one student's tickets as the router value", function() {
			return request(server)
				.get('/api/users/students/1/tickets')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/users/students/1/tickets')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it("should return an array of student's tickets (async version)", async function() {
			const res = await request(server).get('/api/users/students/1/tickets');

			expect(Array.isArray(res.body)).toBe(true);
		});
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
	// router.get('/queue', restricted, (req, res) => {Tickets.findBy({ statusesid: 1 })

	describe('GET /api/tickets/queue', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/tickets/queue')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return tickets as the router value', function() {
			return request(server)
				.get('/api/tickets/queue')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/tickets/queue')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of tickets (async version)', async function() {
			const res = await request(server).get('/api/tickets/queue');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// resolved tickets
	// router.get('/resolved', restricted, (req, res) => { Tickets.findBy({ statusesid: 2 })
	describe('GET /api/tickets/resolved', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/tickets/resolved')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return tickets as the router value', function() {
			return request(server)
				.get('/api/tickets/resolved')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/tickets/resolved')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of tickets (async version)', async function() {
			const res = await request(server).get('/api/tickets/resolved');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	/*
    -- get list of tickets by helperid
        SELECT * FROM Tickets WHERE Tickets.helperid=helperid;

*/
	// router.get('/helpers/:helperid', restricted, (req, res) => { Tickets.findBy({ helperid: 2 })
	describe('GET /api/users/helpers/2/tickets', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/helpers/2/tickets')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return tickets as the router value', function() {
			return request(server)
				.get('/api/users/helpers/2/tickets')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/users/helpers/2/tickets')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of tickets (async version)', async function() {
			const res = await request(server).get('/api/users/helpers/2/tickets');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// view individual ticket
	// SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;
	/*
	-- SQL to get individual ticket
		SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;
*/
	// router.get('/:ticketsid', restricted, (req, res) => {Tickets.findById

	describe('GET /api/tickets/:ticketsid', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/tickets/1')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return ticket 1 as the router value', function() {
			return request(server)
				.get('/api/tickets/1')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/tickets/1')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of 1 ticket (async version)', async function() {
			const res = await request(server).get('/api/tickets/1');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	/*
    -- to view all students: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
		ORDER BY Users.usersid;
*/
	// router.get('/students', restricted, (req, res) => { Users.findStudents()

	describe('GET /api/users/students', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/users/students')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return users/students as the router value', function() {
			return request(server)
				.get('/api/users/students')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/tickets')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of users/students (async version)', async function() {
			const res = await request(server).get('/api/users/students');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
	/*
    -- to view all helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
		ORDER BY Users.usersid;
*/
	// router.get('/helpers', restricted, (req, res) => { Users.findHelpers()

	describe('GET /api/users/helpers', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/users/helpers')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return users/helpers as the router value', function() {
			return request(server)
				.get('/api/users/helpers')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/users/helpers')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of users/helpers (async version)', async function() {
			const res = await request(server).get('/api/users/helpers');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
	// As a student I want to be able to create a new help ticket with a title, description, what I've tried and a category (i.e. React).
	// INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");
	/*
-- Build an integrated slack-bot that allows students to submit help tickets through slack. 
        -- SQL to insert into Tickets newTicket
            INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");
*/
	/*
        -- SQL to insert into Tickets newTicket
            INSERT INTO Tickets (statusesid, studentid, title, description, category) VALUES ("", "", "", "", "");
*/
	// router.post('/', restricted, (req, res) => {Tickets.add(newTicket)

	describe('POST /api/tickets', function() {
		// 	Tickets.addTicket(resourceData);
		// (statusesid, studentid, title, description, category)
		let testTicket = { ticket: 'test123' };
		it('should return 201 OK', async function() {
			return await request(server)
				.post('/api/tickets', testTicket)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return tickets as the router value', async function() {
			return await request(server)
				.post('/api/tickets', testTicket)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.post('/api/tickets', testTicket)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of tickets (async version)', async function() {
			const res = await request(server).post('/api/tickets', testTicket);

			expect(Array.isArray(res.body)).toBe(true);
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
	// router.put('/:ticketsid', restricted, (req, res) => {Tickets.update(updatedTicket, ticketsid)
	/*
-- add helper status
    INSERT INTO Userroles (usersid, rolesid) VALUES ('', '');
*/
	// router.put('/:usersid', (req, res) => { Users.addAsHelper

	/*
-- remove helper status
    DELETE FROM Userroles where Userroles.usersid='' && WHERE Userroles.rolesid='';
*/
	// router.put('/:usersid', (req, res) => {	Users.removeHStatus(usersid)

	describe('PUT /api/tickets/:ticketsid', function() {
		let testTicket = { ticket: 'test123456' };
		it('should return 200 OK', async function() {
			return await request(server)
				.put('/api/tickets/:ticketsid', testTicket)
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return ticket as the router value', async function() {
			return await request(server)
				.put('/api/tickets/:ticketsid', testTicket)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.put('/api/tickets/:ticketsid', testTicket)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of ticket (async version)', async function() {
			const res = await request(server).put('/api/tickets/:ticketsid', testTicket);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	/*
-- delete ticket
    DELETE FROM Tickets where Tickets.ticketsid='';
*/
	// router.delete('/:ticketsid', restricted, (req, res) => { Tickets.remove
	describe('DELETE /api/tickets/:ticketsid', function() {
		let testTicket = { ticketsid: 6 };
		it('should return 201 OK', async function() {
			return await request(server)
				.delete('/api/tickets', testTicket)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return tickets as the router value', async function() {
			return await request(server)
				.delete('/api/tickets', { ticketsid: 5 })
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.delete('/api/tickets', { ticketsid: 4 })
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of tickets (async version)', async function() {
			const res = await request(server).delete('/api/tickets', {
				ticketsid: 3
			});

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
});

describe('statuses router', function() {
	it('should run the tests', function() {
		expect(true).toBe(true);
	});

	// get all statuses -- router.get('/', restricted, (req, res) => {
	// get individual status -- router.get('/:rstatusesid', restricted, (req, res) => {
	describe('GET /api/statuses', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/statuses')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return statuses as the router value', function() {
			return request(server)
				.get('/api/statuses')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/statuses')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of statuses (async version)', async function() {
			const res = await request(server).get('/api/statuses');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// create status -- router.post('/', restricted, (req, res) => {
	describe('POST /api/statuses', function() {
		// 	Statuss.addStatus(resourceData);
		let testStatus = { status: 'test123' };
		it('should return 201 OK', async function() {
			return await request(server)
				.post('/api/statuses', testStatus)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return statuses as the router value', async function() {
			return await request(server)
				.post('/api/statuses', testStatus)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.post('/api/statuses', testStatus)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of statuses (async version)', async function() {
			const res = await request(server).post('/api/statuses', testStatus);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// update status -- router.put('/:statusesid', restricted, (req, res) => {
	describe('PUT /api/statuses/:statusesid', function() {
		let statusesID = req.params.statusesid;
		let testStatus = { status: 'test123456' };
		it('should return 200 OK', async function() {
			return await request(server)
				.put(`/api/statuses/${statusesID}`, testStatus)
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return statuses as the router value', async function() {
			return await request(server)
				.put(`/api/statuses/${statusesID}`, testStatus)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.put(`/api/statuses/${statusesID}`, testStatus)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of statuses (async version)', async function() {
			const res = await request(server).put(`/api/statuses/${statusesID}`, testStatus);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
	// delete status -- router.delete('/:id', restricted, (req, res) => {

	describe('DELETE /api/statuses/${statusesID}', function() {
		let statusesID = req.params.statusesid;
		let testStatus = { statusesid: 6 };
		it('should return 201 OK', async function() {
			return await request(server)
				.delete(`/api/statuses/${statusesID}`, testStatus)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return status as the router value', async function() {
			return await request(server)
				.delete(`/api/statuses/${statusesID}`, { statusesid: 5 })
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.delete(`/api/statuses/${statusesID}`, { statusesid: 4 })
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of statuses (async version)', async function() {
			const res = await request(server).delete(`/api/statuses/${statusesID}`, {
				statusesid: 3
			});

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
});
