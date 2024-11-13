import { createServer } from 'http'
import { EventEmitter } from 'events'
import { config } from 'dotenv'

config()
const emitter = new EventEmitter()
const PORT = process.env.PORT || 1234

const server = createServer((req, res) => {
  emitter.emit('requestReceived', req.method, req.url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  res.end('Событие обработано')
})
emitter.on('requestReceived', (method, url) => {
  console.log({ method })
  console.log({ url })
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
