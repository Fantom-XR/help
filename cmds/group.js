module.exports.run = async (bot, message, args) => {
message.channel.send("Hi There " +
          message.member.user +
          " \n  I heard you wanted the link to our fabulous group so here it is! \n https://web.roblox.com/groups/5424395")
}
module.exports.help = {
name: 'group'
}