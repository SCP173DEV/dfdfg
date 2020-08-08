const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils, iUser) => {

  let user = message.mentions.members.first() || message.author;
  const member = message.mentions.members.first() || message.member;

  let credits = db.fetch(`money_${user.id}`)

  if (credits === null) credits = 0;
  message.channel.send(`🏦 | **${member.user.username}**,  you have a balance of :yen: **${credits}** credits!`)


};

module.exports.help = {
  name: "credits",
  aliases: ["credit"]
}