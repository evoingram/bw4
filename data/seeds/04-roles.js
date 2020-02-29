exports.seed = function(knex) {
	return knex('contexts').insert([
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
