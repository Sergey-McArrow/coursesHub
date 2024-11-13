import config from './config.json' with {type : json}
import {Sequelize} from 'sequelize'

const env = process.env.NODE_ENV || 'edevelopment'
const dbConfig = config[env]

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
)