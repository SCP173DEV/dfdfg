const Discord1 = require("discord.js");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => 
{
    const emojiID = args.join(" "); 
    message.channel.send("**Copy the ID: `" + emojiID + "`**");
};

module.exports.help = 
{
  name: "getid",
  aliases: ["getid"]
};
