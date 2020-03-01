const request = require('supertest');

const server = require('./server.js');

it('should set db environment to testing', function() {
	expect(process.env.DB_ENV).toBe('testing');
});

describe('server', function() {

	// server.use('/api/login', loginRouter);
	describe('GET /api/login', function() {
		it('should return 200', function() {
			// run the server
			// make a GET request to /
			// see that the http code of response is 200
			return request(server)
				.get('/api/login')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return HTML', function() {
			return request(server)
				.get('/api/login')
				.then(res => {
					expect(res.type).toMatch(/html/i);
				});
		});


	// server.use('/api/register', registerRouter);
	describe('GET /api/register', function() {
		it('should return 200', function() {
			// run the server
			// make a GET request to /
			// see that the http code of response is 200
			return request(server)
				.get('/api/register')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return HTML', function() {
			return request(server)
				.get('/api/register')
				.then(res => {
					expect(res.type).toMatch(/html/i);
				});
		});
	});
	
	// server.use('/api/users', usersRouter);
	describe('GET /api/users', function() {
		it('should return 200', function() {
			// run the server
			// make a GET request to /
			// see that the http code of response is 200
			return request(server)
				.get('/api/users')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/users')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});
	});
	
	// server.use('/api/tickets', ticketsRouter);
	describe('GET /api/tickets', function() {
		it('should return 200', function() {
			// run the server
			// make a GET request to /
			// see that the http code of response is 200
			return request(server)
				.get('/api/tickets')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/tickets')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});
	});
		
	// server.use('/api/statuses', statusesRouter);
	describe('GET /api/statuses', function() {
		it('should return 200', function() {
			// run the server
			// make a GET request to /
			// see that the http code of response is 200
			return request(server)
				.get('/api/statuses')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/statuses')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});
	});
		
	// server.use('/api/roles', rolesRouter);
	describe('GET /api/roles', function() {
		it('should return 200', function() {
			// run the server
			// make a GET request to /
			// see that the http code of response is 200
			return request(server)
				.get('/api/roles')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it('should return JSON formatted body', function() {
			return request(server)
				.get('/api/roles')
				.then(res => {
					expect(res.type).toMatch(/json/);
				});
		});
	});
	
});



