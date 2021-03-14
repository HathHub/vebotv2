const Discord = require('discord.js');

module.exports = (client, message, args) => {
        const { member, mentions } = message
        
        if(member.hasPermission('KICK_MEMBERS')){
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                const banEmbed = new Discord.MessageEmbed()
                  .setColor('#3e93de')
                  .setTitle(`Kicked the user`)
                  .setDescription(`${target.tag} has been kicked.`)
                  .setFooter('Made by Zeph', 'https://imgur.com/k8p2M78.png');
                message.channel.send(banEmbed)
            }else{
                const noUser = new Discord.MessageEmbed()
                  .setColor('#3e93de')
                  .setTitle(`You didn't mention a user!`)
                  .setDescription(`<@${member.id}>, you didn't mention a user to kick!`)
                  .setFooter('Made by Zeph','https://imgur.com/k8p2M78.png');
                message.channel.send(noUser);
            }
        }else{
            message.channel.send(`<@${member.id}> doesn't have the permissions to kick.`);
        }
    }
