require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DB_USER_DEV,
		password: process.env.DB_PASSWORD_DEV,
		database: process.env.DB_NAME_DEV,
		host: process.env.DB_HOST_DEV,
		dialect: 'postgres'
	  },
	  test: {
		username: process.env.DB_USER_TEST,
		password: process.env.DB_PASSWORD_TEST,
		database: process.env.DB_NAME_TEST,
		host: process.env.DB_HOST_TEST,
		dialect: 'postgres'
	  },
	  production: {
		username: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_NAME,
		host: 'postgres',
		dialect: 'postgres'
	  }
}