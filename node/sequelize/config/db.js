import { Sequelize } from 'sequelize'
import configData from './config.json' with { type: 'json' }
import path from'path'
import fs from 'fs'

const configPath = path.resolve('./config/config.json')
const configDataParsed = JSON.parse(fs.readFileSync(configPath))
const env = process.env.NODE_ENV || 'development'
const config = configData[env]
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
)

export default sequelize
