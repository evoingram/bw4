// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection:
			'postgres://hojqyvewmiwxrk:8c4134cf7dea9444e1cca94fcb92b5ba072519ed05792efc290ddc91b580b615@ec2-54-80-184-43.compute-1.amazonaws.com:5432/ddrr8ser2jhafp',
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
			'postgres://hojqyvewmiwxrk:8c4134cf7dea9444e1cca94fcb92b5ba072519ed05792efc290ddc91b580b615@ec2-54-80-184-43.compute-1.amazonaws.com:5432/ddrr8ser2jhafp',
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
