import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import bcrypt from 'bcrypt'

config()

const users = [
  {
    id: 1,
    name: 'Chuvak',
    password: 1234,
    email: 'email@gmail.com',
  },
]

const PORT = process.env.PORT || 1234
const app = express()
app.use(express.json())
app.use(cors())

// app.use((err, _req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//     console.error('Bad JSON')
//     console.error(err)
//     return res.status(400).json({ error: 'Invalid JSON payload' })
//   }
//   next()
// })
app.use((req, _res, next) => {
  req.user = {
    id: 1,
    name: 'Chuvak',
    password: 1234,
    email: 'email@gmail.com',
  }
  next()
})

app.get('/', (_req, res) => {
  res.send('ok')
})

app.post('/register', async (req, res) => {
  const { name, password } = req.body
  try {
    if (!name || !password) {
      throw new Error('Name and password are required')
    }
    const hashedPassword = await bcrypt.hash(password, 5)
    users.push({ name, password: hashedPassword })
    console.log(users)
    console.log(`[SUCCESS]: user ${name} was added`)
    res.status(201).send({ message: 'User created' })
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: error.message })
  }
})

app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body
    if (!name || !password) {
      throw new Error('Name and password are required')
    }
    const currentUser = users.find((u) => u.name === name)
    if (!currentUser) {
      throw new Error('User not found')
    }
    const isValidPassword = await bcrypt.compare(password, currentUser.password)
    if (!isValidPassword) {
      throw new Error('Invalid name or password')
    }
    res.json(currentUser)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: error.message })
  }
})

app.get('/profile/:id', (req, res) => {
  try {
    const userId = Number(req.params.id)
    if (req.user.id !== userId) {
      return res.status(403).send('Access denied!')
    }
    const user = users.find((user) => user.id === userId)
    if (!user) {
      return res.status(404).send('User not found!')
    }
    res.json(user)
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
