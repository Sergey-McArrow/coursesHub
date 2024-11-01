import express from 'express'

const app = express()

const PORT = 3333
const URL = 'https://jsonplaceholder.typicode.com/users'

app.get('/users', async (req, res) => {
  try {
    const response = await fetch(URL)
    const users = await response.json()
    res.send(users)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => {
  console.log('Listening port: ', PORT)
})
