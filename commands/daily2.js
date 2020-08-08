const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
   const ownerID = [
    "528911058795102224"
  ];
  if (!ownerID.includes(message.author.id)) return;

  let user = message.mentions.members.first() || message.author;
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

    if (isNaN(args[1])) return;
    db.add(`money_${user.id}`, args[1])
    let credits = await db.fetch(`money_${user.id}`)
    message.channel.send(`🏦 | Au fost adaugati **${args[1]}** credite, acum **${member.user.username}** are o balanta de **${credits}** credite.`)

};

module.exports.help = {
  name:"addcredits",
  aliases: ["valoare"]
}