const socket = io();

const messagesDiv = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value.trim();

  if (message) {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});

socket.on('chat message', ({ text, id }) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(id === socket.id ? 'sent' : 'received');
  messageElement.textContent = text;

  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
