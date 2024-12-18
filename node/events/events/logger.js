import EventEmitter from 'events';

export const logger = new EventEmitter();

logger.on('info', (msg) => console.log(`[INFO]: ${msg}`));
logger.on('warning', (msg) => console.warn(`[WARNING]: ${msg}`));
logger.on('error', (msg) => {
  console.error(`[ERROR]: ${msg}`);
});
