'use strict'
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db') // Ensure the correct path to your db config

class Visitors extends Model {
	static associate(models) {}
}

Visitors.init(
	{
		name: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Visitors',
	},
)

module.exports = Visitors
