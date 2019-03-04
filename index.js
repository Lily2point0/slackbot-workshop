if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const bot = require('./bin/bot').init('BotName');

console.log('App is running');