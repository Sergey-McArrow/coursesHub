import { config } from 'dotenv'
import http from 'http'

config()
const PORT = process.env.PORT || 1234
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.appendHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end(process.env.MESSAGE)
})
server.listen(PORT, () => {
  console.log(`Started on port: ${PORT}`)
})
