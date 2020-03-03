exports.up = function(knex) {
	return knex.schema
		.createTable('users', users => {
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
		})
		.createTable('statuses', users => {
			users.increments('statusesid');
			users
				.string('status', 128)
				.notNullable()
				.unique();
		})
		.createTable('roles', users => {
			users.increments('rolesid');
			users
				.string('rolename', 128)
				.notNullable()
				.unique();
		})
		.createTable('userroles', users => {
			users.increments('urid');
			users
				.integer('usersid')
				.unsigned()
				.notNullable()
				.references('usersid')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			users
				.integer('rolesid')
				.unsigned()
				.notNullable()
				.references('rolesid')
				.inTable('roles')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		})
		.createTable('tickets', users => {
			users.increments('ticketsid');
			users
				.integer('statusesid')
				.unsigned()
				.notNullable()
				.references('statusesid')
				.inTable('statuses')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			users
				.integer('helperid')
				.unsigned()
				.references('usersid')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			users
				.integer('studentid')
				.unsigned()
				.notNullable()
				.references('usersid')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');

			users.string('title', 256).notNullable();
			users.string('description', 256).notNullable();
			users.string('category', 256).notNullable();
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('users')
		.dropTableIfExists('tickets')
		.dropTableIfExists('statuses')
		.dropTableIfExists('roles')
		.dropTableIfExists('userroles');
};
