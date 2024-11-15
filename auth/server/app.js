import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import { sequelize } from './config/db.js'
import { User } from './models/user.js'
import { compare, hash } from 'bcrypt'

config()
const PORT = process.env.PORT || 1234
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'working...' })
})

app.post('/register', async (req, res) => {
  try {
    const { name, password } = req.body

    const existingUser = await User.findOne({ where: { name } })

    if (existingUser) throw new Error('User already exist! Try to login.')
    const hashedPassword = await hash(password, 4)

    const newUser = await User.create({
      name,
      password: hashedPassword,
    })

    res
      .status(201)
      .json({ message: `User ${newUser.name} was successfully registred` })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body
    const existingUser = await User.findOne({ where: { name } })
    if (!existingUser) throw new Error('User not found! Try to register.')
    const isPasswordValid = await compare(password, existingUser.password)
    if (!isPasswordValid) throw new Error('Credentials is invalid')
    res.json({
      message: `User ${existingUser.name} was successfully logged in`,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    console.log(`[SUCCESS]: Listen port: ${PORT}`)
  } catch (error) {
    console.error(`[ERROR]: Cannot establish connection `)
  }
})
