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

// get all roles -- router.get('/', restricted, (req, res) => {
// get individual role -- router.get('/:rolesid', restricted, (req, res) => {
// create role -- router.post('/', restricted, (req, res) => {
// update role -- router.put('/:rolesid', restricted, (req, res) => {
// delete role -- router.delete('/:id', restricted, (req, res) => {

/*
-- delete user
DELETE FROM Users where Users.usersid = '';
*/
// router.delete('/:id', restricted, (req, res) => {

// get individual user
// router.get('/:id', restricted, (req, res) => {

// get list of users
// router.get('/', restricted, (req, res) => {
