const slackbot = require('slackbots');
const botParams = {
	icon_emoji: ':robot_face:',
	as_user: false
};


const channel = process.env.SLACK_CHANNEL;
let bot;

function initBot(botName) {
	bot = new slackbot({
		token: process.env.SLACK_TOKEN,
		name: botName
	});
}

function sendMessage(message) {
	bot.postTo(channel, message, botParams); 
	//note: postMessageToChannel is public channel, postMessageToGroup is private channel
}

module.exports = {
	init: initBot,
	send: sendMessage
}