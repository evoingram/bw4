const request = require('supertest');

const server = require('../api/server.js');

describe('users router', function() {
	it('should run the tests', function() {
		expect(true).toBe(true);
	});

	// get list of users
	// router.get('/', restricted, (req, res) => {

	describe('GET /api/users', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/users')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return users as the router value', function() {
			return request(server)
				.get('/api/users')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/users')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of users (async version)', async function() {
			const res = await request(server).get('/api/users');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// get individual user
	// router.get('/:id', restricted, (req, res) => {

	describe('GET /api/users/1', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/users/1')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return users as the router value', function() {
			return request(server)
				.get('/api/users/1')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/users/1')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of users (async version)', async function() {
			const res = await request(server).get('/api/users/1');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// create user
	describe('POST /api/users', function() {
		// 	Users.addUser(resourceData);
		let testUser = { user: 'test123' };
		it('should return 201 OK', async function() {
			return await request(server)
				.post('/api/users', testUser)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return users as the router value', async function() {
			return await request(server)
				.post('/api/users', testUser)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.post('/api/users', testUser)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of users (async version)', async function() {
			const res = await request(server).post('/api/users', testUser);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// update user
	describe('PUT /api/users/3', function() {
		let testUser = { user: 'test123456' };
		it('should return 200 OK', async function() {
			return await request(server)
				.put('/api/users/3', testUser)
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return users as the router value', async function() {
			return await request(server)
				.put('/api/users/3', testUser)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.put('/api/users/3', testUser)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of users (async version)', async function() {
			const res = await request(server).put('/api/users/3', testUser);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// delete user
	describe('DELETE /api/users', function() {
		let testUser = { usersid: 6 };
		it('should return 201 OK', async function() {
			return await request(server)
				.delete('/api/users', testUser)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return users as the router value', async function() {
			return await request(server)
				.delete('/api/users', { usersid: 5 })
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.delete('/api/users', { usersid: 4 })
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of users (async version)', async function() {
			const res = await request(server).delete('/api/users', { usersid: 3 });

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
});

describe('roles router', function() {
	it('should run the tests', function() {
		expect(true).toBe(true);
	});

	// get list of roles
	// router.get('/', restricted, (req, res) => {
	describe('GET /api/roles', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/roles')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return roles as the router value', function() {
			return request(server)
				.get('/api/roles')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/roles')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of roles (async version)', async function() {
			const res = await request(server).get('/api/roles');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// get individual role -- router.get('/:rolesid', restricted, (req, res) => {
	describe('GET /api/roles/1', function() {
		it('should return 200 OK', function() {
			return request(server)
				.get('/api/roles/1')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return roles/1 as the router value', function() {
			return request(server)
				.get('/api/roles/1')
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/roles/1')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of roles (async version)', async function() {
			const res = await request(server).get('/api/roles/1');

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// create role -- router.post('/', restricted, (req, res) => {
	describe('POST /api/roles', function() {
		// 	Roles.addRole(resourceData);
		let testRole = { role: 'test123' };
		it('should return 201 OK', async function() {
			return await request(server)
				.post('/api/roles', testRole)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return roles as the router value', async function() {
			return await request(server)
				.post('/api/roles', testRole)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.post('/api/roles', testRole)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of roles (async version)', async function() {
			const res = await request(server).post('/api/roles', testRole);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// update role -- router.put('/:rolesid', restricted, (req, res) => {
	describe('PUT /api/roles/3', function() {
		let testRole = { role: 'test123456' };
		it('should return 200 OK', async function() {
			return await request(server)
				.put('/api/roles/3', testRole)
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return roles as the router value', async function() {
			return await request(server)
				.put('/api/roles/3', testRole)
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.put('/api/roles/3', testRole)
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of roles (async version)', async function() {
			const res = await request(server).put('/api/roles/3', testRole);

			expect(Array.isArray(res.body)).toBe(true);
		});
	});

	// delete role -- router.delete('/:id', restricted, (req, res) => {

	/*
		-- delete role
			DELETE FROM Roles where Roles.rolesid = '';
	*/
	// router.delete('/:id', restricted, (req, res) => {

	describe('DELETE /api/roles', function() {
		let testRole = { rolesid: 3 };
		it('should return 201 OK', async function() {
			return await request(server)
				.delete('/api/roles', testRole)
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('should return roles as the router value', async function() {
			return await request(server)
				.delete('/api/roles', { rolesid: 3 })
				.then(res => {
					expect(Array.isArray(res.body)).toBe(true);
				});
		});

		it('should return JSON formatted body', async function() {
			return await request(server)
				.delete('/api/roles', { rolesid: 3 })
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});

		it('should return an array of roles (async version)', async function() {
			const res = await request(server).delete('/api/roles', { rolesid: 3 });

			expect(Array.isArray(res.body)).toBe(true);
		});
	});
});
