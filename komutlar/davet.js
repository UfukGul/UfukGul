const Discord = require("discord.js");

module.exports.run = async (client, message) => {
 
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Botu Ekleyin!`, `[EKLE](https://discordapp.com/oauth2/authorize?client_id=671744547021127691&scope=bot&permissions=805829694)`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
