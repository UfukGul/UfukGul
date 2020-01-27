const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  if (message.channel.id !== "670632540197093377") return message.channel.send('<a:can:670247508542357535> Komut Bu Kanalda Engellenmiştir')
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Botu Ekleyin!`, `[EKLE](https://discordapp.com/oauth2/authorize?client_id=671249130215047178&scope=bot&permissions=805829694)`)
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
