module.exports.run = async (bot, message, args) => {
message.channel.send("Hi There " +
          message.member.user +
          " \n  I heard you wanted the link to our game so here it is! \n https://www.roblox.com/games/4635317006/Disneyland-Orlando-Park")
}
module.exports.help = {
name: 'game'
}