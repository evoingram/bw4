// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection:
			'postgres://mkqenswhvjbjzm:bf5952890032e540bac8d5c35d4a8d93ddc7328fc34bd35732602b1255d54146@ec2-34-235-108-68.compute-1.amazonaws.com:5432/dal43mqaa3kru',
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
			'postgres://mkqenswhvjbjzm:bf5952890032e540bac8d5c35d4a8d93ddc7328fc34bd35732602b1255d54146@ec2-34-235-108-68.compute-1.amazonaws.com:5432/dal43mqaa3kru',
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
