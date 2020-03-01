// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection:
			'postgres://rnubomyahmrzsd:554b0f134597a793106f80452338fcc87092962f63beb3fdd5ef58d34792a7fb@ec2-18-213-176-229.compute-1.amazonaws.com:5432/d848goo2rrk72h',
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
		pool: {
			min: 2,
			max: 10
		}
	},
	production: {
		client: 'pg', // postgresql
		connection:
			'postgres://rnubomyahmrzsd:554b0f134597a793106f80452338fcc87092962f63beb3fdd5ef58d34792a7fb@ec2-18-213-176-229.compute-1.amazonaws.com:5432/d848goo2rrk72h',
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
};
