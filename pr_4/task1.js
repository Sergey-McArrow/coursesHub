import http from 'http'
import moment from 'moment'

const server = http.createServer((req, res) => {
  const date = moment().format('YYYY-MM-DD HH:mm:ss')
  res.statusCode = 200
  res.appendHeader('Content-Type', 'text/plain')
  res.appendHeader('Cache-Control', 'public, max-age=3600')
  res.end(date)
})

server.listen(3003, () => {
  console.log('Server started on Port 3003')
})
