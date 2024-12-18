import express from 'express'
import 'dotenv/config'
import sequelize from './config/db.js'
import { Post, User } from './models/index.js'

const app = express()
const PORT = process.env.PORT || 1234

app.get('/', (_req, res) => {
  res.send('hello')
})

app.get('/create-user', async (_req, res) => {
  try {
    const newUser = await User.create({
      name: 'john',
      email: 'john11221@gmail.com',
      createdAt: Date.now(),
    })
    res.statusCode = 200
    res.send(`User created: ${JSON.stringify(newUser)}`)
  } catch (error) {
    console.error(error)
  }
})
app.get('/create-post', async (_req, res) => {
  try {
    const user = await User.findOne({ where: { id: 2 } })
    if (!user) throw new Error('User not found')
    const newPost = await Post.create({
      title: 'post',
      content: 'myPost',
      createdAt: Date.now(),
    })
    await user.addPosts(newPost)
    res.statusCode = 200
    res.send(`Post created: ${JSON.stringify(newPost)}`)
  } catch (error) {
    console.error(error)
  }
})

app.get('/posts', async (_req, res) => {
  try {
    const userWithPosts = await User.findOne({
      where: { id: 2 },
      include: {
        model: Post,
        as: 'posts',
      },
    })
    if (!userWithPosts) {
      throw new Error('User not found')
    }
    res.json(userWithPosts)
  } catch (error) {
    console.log(error)
  }
})

app.get('/update-user', async (_req, res) => {
  try {
    const [conut] = await User.update({ name: 'Alice' }, { where: { id: 2 } })
    res.json({ message: `Updated ${conut} Users` })
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    console.log('Listen port: ', PORT)
  } catch (error) {
    console.error(error)
  }
})
