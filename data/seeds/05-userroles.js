exports.seed = function(knex) {
	return knex('projectsresources').insert([
		{
			usersid: 1,
			rolesid: 2
		},
		{
			usersid: 2,
			rolesid: 1
		},
		{
			usersid: 3,
			rolesid: 2
		},
		{
			usersid: 4,
			rolesid: 1
		},
		{
			usersid: 5,
			rolesid: 2
		}
	]);
};
