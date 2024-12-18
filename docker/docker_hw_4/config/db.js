const { Sequelize } = require('sequelize')
const configData = require('./config.json')

const env = process.env.NODE_ENV || 'development'
const config = configData[env]
const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: config.dialect,
	},
)

module.exports = sequelize
