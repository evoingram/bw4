exports.seed = function(knex) {
	return knex('statuses').insert([
		{
			statusesid: 1,
			status: 'queue'
		},
		{
			statusesid: 2,
			status: 'resolved'
		},
		{
			statusesid: 3,
			status: 'in progress'
		}
	]);
};
