const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let user = message.author;
  let timeout = 86400000;
  let amount = 250;
  let daily = await db.fetch(`daily_${user.id}`);
  const member = message.mentions.members.first || message.author;

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    message.channel.send(`🏦 | U can  use this in **${time.hours}** hours, **${time.minutes}** minutes, **${time.seconds}** seconds`)
  } else {

  message.channel.send(`🏦 | you received your :yen: 250 daily credits!`)


   db.add(`money_${user.id}`, amount)
   db.set(`daily_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name: "daily",
  aliases: ["day"]
}