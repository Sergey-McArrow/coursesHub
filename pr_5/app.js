import express from 'express'
import sequelize from './config/db.js'
import { Product } from './models/product.js'

const app = express()
const PORT = process.env.PORT || 3344

app.get('/', (_req, res) => {
  res.send('Server running!')
})

Product.sync()

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    console.log('Listen: ', PORT)
  } catch (error) {
    console.error(error)
  }
})
