import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

export const Product = sequelize.define(
  'Product',
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Products',
    timestamps: false,
  }
)
