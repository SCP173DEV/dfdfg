const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.author;
  let memberj = db.fetch(`money_${message.author.id}`)
  let member;
  const membereco = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

   let credits = db.fetch(`money_${user.id}`)

  if (credits === null) credits = 0;
  const caractere = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz'
  if (!user) {
      return message.channel.send(`<:no:684479763464847411> | **${membereco.user.username}**, mention someone.`)
  }
  
  if (!args[1]) {
      return message.channel.send(`<:no:684479763464847411> | **${membereco.user.username}**,  mentions someone and specifies a number of credits.`)
  }
  if (message.content.includes('-')) { 
      return message.channel.send(`<:no:684479763464847411> | **${membereco.user.username}**, u can't do that.`)
  }

    if (isNaN(args[1])) return message.channel.send(`<:no:684479763464847411> | u can't do that`)
  
  if (member < args[1]) {
      return message.channel.send(`<:no:684479763464847411> | **${membereco.user.username}**, u don't have enough credits.`)
  }

  const mess = `**🏦 | Transfer Bancar** \n \nTransferam **${args[1]}** catre **${membereco.user.username}** \nCreditele curente ale lui **${membereco.user.username}** **${credits}** \ \n \n➡️ | Au fost trimise **${args[0]}** credite catre **${membereco.user.username}**`
     message.channel.send(mess)
      db.add(`money_${user.id}`, args[1])
      db.subtract(`money_${message.author.id}`, args[1])
      }
                           
module.exports.help = {
  name:"pay",
  aliases: ["pay"]
}