exports.seed = function(knex) {
	return knex('tasks').insert([
		{
			ticketsid: 1,
			statusesid: 3,
			helperid: 2,
			studentid: 2,
			title: 'the task notes',
			description: false, // or true,
			category: false
		},
		{
			ticketsid: 2,
			statusesid: 3,
			usersid: 'task description',
			title: 'the task notes',
			description: false, // or true,
			category: false
		},
		{
			ticketsid: 3,
			statusesid: 2,
			usersid: 'task description',
			title: 'the task notes',
			description: false, // or true,
			category: false
		},
		{
			ticketsid: 4,
			statusesid: 2,
			usersid: 'task description',
			title: 'the task notes',
			description: false, // or true,
			category: false
		},
		{
			ticketsid: 5,
			statusesid: 1,
			usersid: 'task description',
			title: 'the task notes',
			description: false, // or true,
			category: false
		},
		{
			ticketsid: 6,
			statusesid: 1,
			usersid: 'task description',
			title: 'the task notes',
			description: false, // or true,
			category: false
		}
	]);
};
