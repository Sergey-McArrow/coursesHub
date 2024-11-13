import { createServer } from 'http'
import { config } from 'dotenv'

config()
const PORT = process.env.PORT || 1234

const server = createServer((req, res) => {
  const method = req.method
  const url = req.url
  if (method === 'POST' && url === '/submit') {
    let body = ''
    req.on('data', (chunk) => {
      body += String(chunk)
    })
    req.on('end', () => {
      console.log('Body recieved')
      console.log({ body })
    })
    res.appendHeader('Content-Type', 'application/json')
    res.appendHeader('Access-Control-Allow-Origin', '*')
    res.statusCode = 200
    res.end(JSON.stringify({ message: 'POST запрос обработан' }))
  } else {
    res.statusCode = 404
    res.end('Bad reqest')
  }
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
