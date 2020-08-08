const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "681120434074157135") return message.channel.send("**Get Out!.**");
 const dm_send = args.join(" ")
 const guildMembers = await message.guild.members.fetch()
 guildMembers.each(m => m.send(dm_send))
}
  message.channel.send("done ✅")
    let user = message.mentions.users.first() || message.author;
    let rs = Math.round(Math.random() * 100);
};

module.exports.help = {
  name:"dmall",
  aliases: ["dm"]
}