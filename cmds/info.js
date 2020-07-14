const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
               

        let trufal = {
            "true": "Robot",
            "false": "Human"
        }

        let status = { 
            "online": "Online",
            "idle": "Idle",
            "dnd": "Do Not Disturb",
            "invisible": "Offline/Invisible"
        }

        let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user)
    const embed = new Discord.RichEmbed()
        .setColor(' #f3b9cb')
        .setAuthor(`${user.tag} Info`, user.avatarURL)
        .setDescription(`**• Name: **${user.tag}\n**• ID: **${user.id}\n\n**• Account Type: **${trufal[user.bot]}\n**• Status: **${status[user.presence.status]}\n**• Game: **${user.presence.game ? user.presence.game.name : 'I do not see him playing anything!'}\n\n**• Roles: **${member.roles.map(roles => `${roles}`).join(', ')}\n\n**• Profile Photo Link: **[Click here](${user.displayAvatarURL})`)
        .setThumbnail(user.avatarURL)
        .setTimestamp()
     message.channel.send({embed});
};

module.exports.help = {
    name: 'info',
};