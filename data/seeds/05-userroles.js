exports.seed = function(knex) {
	return knex('userroles').insert([
		{
			usersid: 1,
			rolesid: 2,
			urid: 1
		},
		{
			usersid: 2,
			rolesid: 1,
			urid: 2
		},
		{
			usersid: 3,
			rolesid: 2,
			urid: 3
		},
		{
			usersid: 4,
			rolesid: 1,
			urid: 4
		},
		{
			usersid: 5,
			rolesid: 2,
			urid: 5
		},
		{
			usersid: 2,
			rolesid: 2,
			urid: 6
		},
		{
			usersid: 1,
			rolesid: 1,
			urid: 7
		}
	]);
};
