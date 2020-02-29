exports.seed = function(knex) {
	return knex('projects').insert([
		{
			usersid: 1,
			password: 'password',
			email: 'email@email.com',
			name: 'johnny appleseed'
		},
		{
			usersid: 2,
			password: 'password',
			email: 'email@email.com',
			name: 'johnny appleseed'
		},
		{
			usersid: 3,
			password: 'password',
			email: 'email@email.com',
			name: 'johnny appleseed'
		},
		{
			usersid: 4,
			password: 'password',
			email: 'email@email.com',
			name: 'johnny appleseed'
		},
		{
			usersid: 5,
			password: 'password',
			email: 'email@email.com',
			name: 'johnny appleseed'
		}
	]);
};
