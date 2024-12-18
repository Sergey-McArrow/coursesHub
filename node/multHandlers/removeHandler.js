import EventEmitter from 'events'
import { eventHandler } from './helper'

const emitter = new EventEmitter()

emitter.on('ev', eventHandler)
emitter.emit('ev')
emitter.off('ev', eventHandler)
emitter.emit('ev')
