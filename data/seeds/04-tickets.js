exports.seed = function(knex) {
	return knex('tickets').insert([
		{
			ticketsid: 1,
			statusesid: 3,
			helperid: 2,
			studentid: 1,
			title: 'title ticket 1',
			description: 'i am having a react problem.',
			category: 'react'
		},
		{
			ticketsid: 2,
			statusesid: 3,
			helperid: 2,
			studentid: 1,
			title: 'title ticket 2',
			description: 'i am having a html problem.',
			category: 'html'
		},
		{
			ticketsid: 3,
			statusesid: 2,
			helperid: 2,
			studentid: 3,
			title: 'title ticket 3',
			description: 'i am having a node problem.',
			category: 'node'
		},
		{
			ticketsid: 4,
			statusesid: 2,
			helperid: 2,
			studentid: 4,
			title: 'title ticket 4',
			description: 'i am having a css problem.',
			category: 'css'
		},
		{
			ticketsid: 5,
			statusesid: 1,
			helperid: '',
			studentid: 5,
			title: 'title ticket 5',
			description: 'i am having a javascript problem.',
			category: 'javascript'
		},
		{
			ticketsid: 6,
			statusesid: 1,
			helperid: '',
			studentid: 2,
			title: 'title ticket 6',
			description: 'i am having another react problem.',
			category: 'react'
		}
	]);
};
