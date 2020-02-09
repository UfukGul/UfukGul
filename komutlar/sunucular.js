const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 client.guilds.map(eklisunucu=> message.channel.send(eklisunucu.name).catch(err => console.log(err)))}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucular"],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'botun olduğu sunucuları atar',
  usage: 'sunucular'
};