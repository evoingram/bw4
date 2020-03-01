exports.seed = function(knex) {
	return knex('roles').insert([
		{
			rolesid: 1,
			rolename: 'helper'
		},
		{
			rolesid: 2,
			rolename: 'student'
		}
	]);
};
