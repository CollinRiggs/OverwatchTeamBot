const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require('./auth.json').token;

bot.on('ready', () => {
  console.info('Logged in as ' + bot.user.tag + '!');
  bot.user.setActivity(" everyone lose SR...", {type: "WATCHING"})
})

bot.login(token);
