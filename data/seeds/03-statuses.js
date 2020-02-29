exports.seed = function(knex) {
	return knex('statuses').insert([
		{
			statusesid: 1,
			status: 'queue'
		},
		{
			statusesid: 1,
			status: 'resolved'
		},
		{
			statusesid: 1,
			status: 'in progress'
		}
	]);
};
