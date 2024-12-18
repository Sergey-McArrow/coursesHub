import EventEmitter from 'events'

export const emitter = new EventEmitter()

emitter.on('event', () => {
  console.log('[EVENT]: first time emitted')
})

emitter.on('event', () => {
  console.log('[EVENT: second time emitted')
})
emitter.emit('event')
