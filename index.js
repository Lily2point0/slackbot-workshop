if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const bot = require('./bin/lib/bot').init('BotName');

console.log('App is running');
