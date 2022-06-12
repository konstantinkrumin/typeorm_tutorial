module.exports = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: false,
	logging: true,
	entities: ['src/entity/**/*.ts', './entity/**/*.js'],
	migrations: ['src/migration/**/*.ts', './migration/**/*.js'],
	subscribers: ['src/subscriber/**/*.ts', './subscriber/**/*.js'],
	cli: {
		entitiesDir: 'src/entity',
		migrationsDir: 'src/migration',
		subscribersDir: 'src/subscriber'
	}
};
