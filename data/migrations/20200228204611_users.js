exports.up = function(knex) {
	return knex.schema.createTable('users', users => {
		users.increments('usersid');

		users.string('password', 128).notNullable();

		users
			.string('email', 128)
			.notNullable()
			.unique();
		users
			.string('name', 128)
			.notNullable()
			.unique();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('users');
};
