const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

function sendMessage(username, message, eventEmitter) {
  eventEmitter.emit('message', username, message);
}

eventEmitter.on('message', (username, message) => {
  console.log(`${username}: ${message}`);
});

sendMessage('Chuvak', 'Hello, everyone!', eventEmitter);
sendMessage('Chuviha', 'Hi, Chuvak!', eventEmitter);
sendMessage('Chuvak', 'Hey Chuviha!', eventEmitter);
sendMessage('Ded', 'Hello Chuvaki!', eventEmitter);
