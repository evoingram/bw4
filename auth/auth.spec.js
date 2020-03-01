const request = require('supertest');

const server = require('../api/server.js');

describe('cohorts router', function() {
	it('should run the tests', function() {
		expect(true).toBe(true);
	});

	describe('GET /api/cohorts', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/cohorts')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return cohorts as the router value', function() {
			return request(server)
				.get('/api/cohorts')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/cohorts')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of cohorts (async version)', async function() {
			const res = await request(server).get('/api/cohorts');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	describe('POST /api/cohorts', function() {
		// 	Cohorts.addCohort(resourceData);
		let testCohort = { cohort: 'test123' };
		it('should return 201 OK', async function() {
			return await request(server)
				.post('/api/cohorts', testCohort)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return cohorts as the router value', async function() {
			return await request(server)
				.post('/api/cohorts', testCohort)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.post('/api/cohorts', testCohort)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of cohorts (async version)', async function() {
			const res = await request(server).post('/api/cohorts', testCohort);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	describe('PUT /api/cohorts', function() {
		let testCohort = { cohort: 'test123456' };
		it('should return 200 OK', async function() {
			return await request(server)
				.put('/api/cohorts', testCohort)
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return cohorts as the router value', async function() {
			return await request(server)
				.put('/api/cohorts', testCohort)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.put('/api/cohorts', testCohort)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of cohorts (async version)', async function() {
			const res = await request(server).put('/api/cohorts', testCohort);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	describe('DELETE /api/cohorts', function() {
		let testCohort = { cohortsid: 6 };
		it('should return 201 OK', async function() {
			return await request(server)
				.delete('/api/cohorts', testCohort)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return cohorts as the router value', async function() {
			return await request(server)
				.delete('/api/cohorts', { cohortsid: 5 })
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.delete('/api/cohorts', { cohortsid: 4 })
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of cohorts (async version)', async function() {
			const res = await request(server).delete('/api/cohorts', { cohortsid: 3 });

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
});

// server.use('/api/login', loginRouter);
// server.use('/api/register', registerRouter);
// server.use('/api/users', usersRouter);
// server.use('/api/tickets', ticketsRouter);
// server.use('/api/statuses', statusesRouter);
// server.use('/api/roles', rolesRouter);

// check restrictions on all endpoints

// get all roles -- router.get('/', restricted, (req, res) => {
// get individual role -- router.get('/:rolesid', restricted, (req, res) => {
// create role -- router.post('/', restricted, (req, res) => {
// update role -- router.put('/:rolesid', restricted, (req, res) => {
// delete role -- router.delete('/:id', restricted, (req, res) => {

// get all statuses -- router.get('/', restricted, (req, res) => {
// get individual status -- router.get('/:rstatusesid', restricted, (req, res) => {
// create status -- router.post('/', restricted, (req, res) => {
// update status -- router.put('/:statusesid', restricted, (req, res) => {
// delete status -- router.delete('/:id', restricted, (req, res) => {

/*
    -- to view all students who are also helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
        ORDER BY Users.usersid
        UNION 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
        ORDER BY Users.usersid;
*/
// router.get('/helperstudents', restricted, (req, res) => { Users.findHStudents()

/*
    -- to view all students: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='student'
		ORDER BY Users.usersid;
*/
// router.get('/students', restricted, (req, res) => { Users.findStudents()

/*
    -- to view all helpers: 
        SELECT * FROM Users 		
        JOIN Userroles ON Userroles.usersid=Users.usersId
        JOIN Roles ON Userroles.rolesid=Roles.rolesid
		WHERE Roles.role='helper'
		ORDER BY Users.usersid;
*/
// router.get('/helpers', restricted, (req, res) => { Users.findHelpers()

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

/*
-- delete user
DELETE FROM Users where Users.usersid = '';
*/
// router.delete('/:id', restricted, (req, res) => {

// get individual user
// router.get('/:id', restricted, (req, res) => {

// get list of users
// router.get('/', restricted, (req, res) => {

// get list of all tickets
// router.get('/', restricted, (req, res) => {Tickets.find

// get list of tickets by studentid
// SELECT * FROM Tickets WHERE Tickets.studentid=studentid;
// router.get('/students/:studentid/tickets', restricted, (req, res) => {Tickets.findBy({ studentid: req.params.studentid })

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

// resolved tickets
// router.get('/resolved', restricted, (req, res) => { Tickets.findBy({ statusesid: 2 })

/*
    -- get list of tickets by helperid
        SELECT * FROM Tickets WHERE Tickets.helperid=helperid;

*/
// router.get('/helpers/:helperid', restricted, (req, res) => { Tickets.findBy({ helperid: 2 })

// view individual ticket
// SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;

/*
	-- SQL to get individual ticket
		SELECT * FROM Tickets WHERE Tickets.ticketsid=ticketsid;
*/
// router.get('/:ticketsid', restricted, (req, res) => {Tickets.findById

/*
-- delete ticket
    DELETE FROM Tickets where Tickets.ticketsid='';
*/
// router.delete('/:ticketsid', restricted, (req, res) => { Tickets.remove

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
// router.post('/', restricted, (req, res) => {Tickets.add(newTicket)

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
