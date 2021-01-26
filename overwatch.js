class Team {
  constructor(message) {
    this.guildId = message.guild.id;
    this.channelId = message.channel;
    this.messageId = message.id;
    this.players = new Array();
  }

  addPlayer(name, btag, role) {
    this.players.push(new Player(name, btag, role));
  }
}

class Player {
  constructor(name, btag, role) {
    this.name = name;
    this.btag = btag;
    this.role = role;
  }
}

const TANK = new Role("Tank", "idktank");
const DPS = new Role("DPS", "idkdps");
const SUPPORT = new Role("Support", "idksupp");

class Role {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
}
