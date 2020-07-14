const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
        let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user)
    const embed = new Discord.RichEmbed()
        .setColor('#f3b9cb')
    .setThumbnail(message.guild.iconURL)    
    .setAuthor(`COMMANDS`)
        .setDescription("__**Non Admin Commands**__ \n `;help` \n `;game` \n `;avatar` \n `;icon`  \n `;group` \n `;credits` \n `;info` \n `;serverinfo` \n `;ping` \n __**Admin Commands**__ \n `;kick` \n `;ban` \n `;mute` \n `;warn`")
     message.author.send({embed});
  
  message.channel.send(
message.member.user +
 " check your DMs!")
  
};

module.exports.help = {
    name: 'help',
};