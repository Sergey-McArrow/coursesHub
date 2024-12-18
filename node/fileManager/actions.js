import EventEmitter from 'events'
import {
  createHandler,
  deleteHandler,
  moveHandler,
  renameHandler,
} from './eventHandlers.js'

export const emitter = new EventEmitter()

emitter.on('create', createHandler)
emitter.on('delete', deleteHandler)
emitter.on('move', moveHandler)
emitter.on('rename', renameHandler)
