const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require('./auth.json').token;
import 'overwatch.js';

bot.on('ready', () => {
  console.info('Logged in as ' + bot.user.tag + '!');
  bot.user.setActivity(" everyone lose SR...", {type: "WATCHING"});
});

bot.on('message', (message) => {
  if (message.author == bot.user) return;

  if (message.content.startsWith("•")) processCommand(message);
})

function processCommand(message) {
  let fullCommand = message.content.substr(1);
  let splitCommand = fullCommand.split(" ");
  let primaryCommand = splitCommand[0];
  let arguments = splitCommand.slice(1);

  console.log("Command received: " + primaryCommand);
  console.log("Arguments: " + arguments);
  switch (primaryCommand) {
    case "createTeam":
      createNewTeam(message); break;
    case "addTank":
      addTank(message, arguments); break;
    case "addDps":
      addDps(message, arguments); break;
    case "addSupport":
      addSupport(message, arguments); break;
    case "finish":
      finishTeam(message); break;
    case "clean":
      cleanChannel(message); break;
  }
}

let activeChannels = new Map();
let teams = new Map();

function createNewTeam(message) {
  let team = new Team(message);
  teams.set(team.messageId, team);
  activeChannels.set(team.channelId, team);
}

function addTank(message) {
  team = activeChannels.get(message.channel.id);
  if (team == undefined) {
    message.channel.send("Not currently setting up a team in this channel!");
    return;
  }
  team.addPlayer(arguments[0], arguments[1], TANK);
  message.channel.send('Added new tank player: ${arguments[0]}');
}

function addDps(message) {
  team = activeChannels.get(message.channel.id);
  if (team == undefined) {
    message.channel.send("Not currently setting up a team in this channel!");
    return;
  }
  team.addPlayer(arguments[0], arguments[1], DPS);
}

function addSupport(message) {
  team = activeChannels.get(message.channel.id);
  if (team == undefined) {
    message.channel.send("Not currently setting up a team in this channel!");
    return;
  }
  team.addPlayer(arguments[0], arguments[1], SUPPORT);
}

function finishTeam(message) {
  activeChannels.delete(message.channel.id);
}

function cleanChannel(message) {

}



bot.login(token);
