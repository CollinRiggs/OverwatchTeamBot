const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require('./auth.json').token;

bot.login(token);

bot.on('ready', () => {
  console.info('Logged in as ' + bot.user.tag + '!');
})
