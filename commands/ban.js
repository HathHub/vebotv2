const Discord = require('discord.js');

module.exports = (client, message, args) => {
        const { member, mentions } = message
        
        if(member.hasPermission('BAN_MEMBERS')){
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                const banEmbed = new Discord.MessageEmbed()
                  .setColor('#3e93de')
                  .setTitle(`Banned the user`)
                  .setDescription(`${target.tag} has been banned.`)
                  .setFooter('Made by Zeph', 'https://imgur.com/k8p2M78.png');
                message.channel.send(banEmbed)
            }else{
                const noUser = new Discord.MessageEmbed()
                  .setColor('#3e93de')
                  .setTitle(`You didn't mention a user!`)
                  .setDescription(`<@${member.id}>, you didn't mention a user to ban!`)
                  .setFooter('Made by Zeph','https://imgur.com/k8p2M78.png');
                message.channel.send(noUser);
            }
        }else{
            message.channel.send(`<@${member.id}> doesn't have the permissions to ban.`);
        }
    }
