var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', (user, userID, channelID, message, evt) => {
  if (user.bot) return; // prevents bots interacting with one another or itself.
  if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];

    args = args.splice(1);

    switch (cmd) {
      case 'water':
      bot.sendMessage({
        to: channelID,
        message: 'https://cdn.discordapp.com/attachments/281263495377584128/774413079295033374/lul.jpeg'
      });
      break;
	  case 'weather':
	  bot.sendMessage({
		  to: channelID,
		  message: 'https://cdn.discordapp.com/attachments/126522748552871936/774774980797661264/unknown.png'
	  });
	  break;
    };
  };
});