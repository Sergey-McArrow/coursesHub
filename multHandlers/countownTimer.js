import EventEmitter from 'events'
import { tickCounter } from './helper.js'

const emitter = new EventEmitter()

emitter.on('tick', (time) => tickCounter(time))

const coutdown = (seconds, emitter) => {
  let remainingtime = seconds

  const interval = setInterval(() => {
    if (remainingtime > 0) {
      emitter.emit('tick', remainingtime)
      remainingtime--
    } else {
      emitter.emit('end')
      clearInterval(interval)
    }
  }, [1000])
}
coutdown(5, emitter)
