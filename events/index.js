import express from 'express'
import { logger } from './events/logger.js'

const app = express()
const PORT = 3333

const conectToDB = (res) => {
    logger.emit('info', 'Trying to connect')
    setTimeout(() => {
        logger.emit('warning', 'High memory usage')
    }, 1000);
    setTimeout(() => {
        logger.emit('error', 'Connection failed')
    }, 2000);
    setTimeout(() => {
        res.send('Failed')
    }, 2200);
}

app.get('/', (_req, res) => {
    res.send('yo')
})
app.get('/connect', (_req, res) => {
    conectToDB(res)
})

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
})