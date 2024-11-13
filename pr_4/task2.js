import http from 'http'
import fs from 'fs'
import moment from 'moment'

const server = http.createServer((req, res) => {
  const date = moment().format('YYYY-MM-DD HH:mm:ss')

  fs.appendFile(
    'reqsLogs.txt',
    `Method: ${req.method} was called at: ${date}\n`,
    (err) => {
      if (err) {
        console.error('[ERROR]: ', err)
        return
      }
      console.log('[SUCCESS]: req wriiten')
    }
  )
  res.statusCode = 200
  res.appendHeader('Content-Type', 'text/plain', 'charset=utf-8')
  res.end('Req logged')
})

server.listen(3004, () => {
  console.log('Started on port 3004')
})
