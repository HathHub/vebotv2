const Discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'All commands',
    execute(client, message, args){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#3e93de')
            .setTitle('All Commands')
            .setDescription("A list of all the commands")
            .addField("Minecraft (coming soon)","`money (user)`,`moneytop`")
            .addField("Music (coming soon)","`play`,`pause`,`disconnect`")
            .addField("Moderation","`kick`,`ban`,`unban`,`punishments`")
            .addField("Utilities","`poll`")
            .setFooter('Made by Zeph', 'https://imgur.com/k8p2M78.png');
        message.channel.send(helpEmbed)

    }
}