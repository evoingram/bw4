exports.seed = function(knex) {
	return knex('users').insert([
		{
			usersid: 1,
			password: 'password',
			email: 'email@email.com',
			name: 'Erica Ingram'
		},
		{
			usersid: 2,
			password: 'password',
			email: 'email1@email.com',
			name: 'johnny appleseed'
		},
		{
			usersid: 3,
			password: 'password',
			email: 'email2@email.com',
			name: 'hank hill'
		},
		{
			usersid: 4,
			password: 'password',
			email: 'email3@email.com',
			name: 'peggy hill'
		},
		{
			usersid: 5,
			password: 'password',
			email: 'email4@email.com',
			name: 'luanne platter'
		}
	]);
};
