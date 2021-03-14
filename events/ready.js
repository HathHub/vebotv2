const Discord = require('discord.js');
module.exports = (client) => {
  
  client.user.setPresence( 
    {
      status: "/help || Vanilla Earth", 
      game: { 
        name: '!ping pong', 
        url: null, 
        type: "PLAYING"
      }
    }
  );
 
   client.on("message", async message => {
    let guild = message.guild
        if (message.author.bot) return;
    if (message.channel.id === "820071418204782633") {
      let channel = client.channels.cache.get("820071418204782633");
      const isInvite = async (guild, code) => {
        return await new Promise(resolve => {
          guild.fetchInvites().then(invites => {
            for (const invite of invites) {
              if (code === invite[0]) {
                resolve(true);
                return;
              }
            }

            resolve(false);
          });
        });
      };
        const { guild, member, content } = message;
      
        const code = content.split("discord.gg/")[1];
      const code1 = code.replace(/(.*?) .*/i, "$1") 
  const dm = client.users.cache.get(message.author.id)
            const invite = await fetch(`https://discord.com/api/v8/invites/${code1}`).then(response => response.json());
  let name = invite.guild.name
  
      const nonamenolink = new Discord.MessageEmbed()
        .setTitle(`You cant advertise that Nation`)
    .setDescription(`We have found the following issues in your` + " `" + `${invite.guild.name}` + "` " + `discord server:\n
    - Your discord server does not start with the word "VE"\n
    - Your first discord channel is not the ve invite link\n
    **Please fix this issues if you want to publish your nation advertise**
    `)
    .setFooter('If you think this is an error please communicate to a staff', guild.iconURL())
          .setColor("RED")  
      
      const yesnamenolink = new Discord.MessageEmbed()
    .setTitle(`You cant advertise that Nation`)
    .setDescription(`We hhaveave found the following issues in your` + " `" + `${invite.guild.name}` + "` " + `discord server:\n
    - Your first discord channel is not the ve invite link\n
    **Please fix this issues if you want to publish your nation advertise**
    `)
    .setFooter('If you think this is an error please communicate to a staff', guild.iconURL())
            .setColor("RED")
    
        const nonameyeslink = new Discord.MessageEmbed()
    .setTitle(`You cant advertise that Nation`)
    .setDescription(`We have found the following issues in your` + " `" + `${invite.guild.name}` + "` " + `discord server:\n
   - Your discord server does not start with the word "VE"\n
    **Please fix this issues if you want to publish your nation advertise**
    `)
        .setColor("RED")
    .setFooter('If you think this is an error please communicate to a staff', guild.iconURL())
  
  let dcchannel = invite.channel.name
       if((name.includes('VE') && !dcchannel.includes)) return dm.send(yesnamenolink);
         if(!name.includes('VE') && !dcchannel.includes('https://discord.gg/C8GnJa3nUQ')) {
           dm.send(nonamenolink)
           message.delete()
       }
      if(!name.includes('VE') && dcchannel.includes('https://discord.gg/C8GnJa3nUQ')) { 
      dm.send(nonameyeslink);
                   message.delete()
       }
               if(name.includes('VE') && !dcchannel.includes('https://discord.gg/C8GnJa3nUQ')) { 
      dm.send(yesnamenolink);
                            message.delete()
       }
                     if(invite.message.includes('Unknown Invite')) { 
                            message.delete()
       }
      if(name.includes('VE') && dcchannel.includes('https://discord.gg/C8GnJa3nUQ')) return;

        if (content.includes("discord.gg/")) {
          const isOurInvite = await isInvite(guild, code);
          if (!isOurInvite) {

          }
        };
    }
    
  })
  
  client.on ('messageReactionAdd', async (reaction, user)=>{
  if(user.bot) return;
    let channel = reaction.message.channel
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (!reaction.message.guild.available) return;
      if (reaction.message.channel.id === "792128190276698163") {
let reactor = reaction.message.guild.members.cache.get(user.id)
        if (reaction.emoji.name === "👍") {
          const accepted = new Discord.MessageEmbed()
   .setTitle(`Suggestion accepted`)
   .setDescription(`${reaction.message.embeds[0].description.replace('\n\n📊 | Your suggestion will be reviewed by staff soon.', '')}\n` + `[Click here to see message](https://discord.com/channels/729293205899575297/792128190276698163/${reaction.message.id})`)
   .setColor('GREEN')
   .setFooter(`${reaction.message.embeds[0].footer.text}`)
          .setTimestamp() 
if (reactor.permissions.has('ADMINISTRATOR')) return channel.send(accepted)
}
                 if (reaction.emoji.name === "👎") {             
                    const rejected = new Discord.MessageEmbed()
   .setTitle(`Suggestion rejected`) 
   .setDescription(`${reaction.message.embeds[0].description.replace('\n\n📊 | Your suggestion will be reviewed by staff soon.', '')}\n` + `[Click here to see message](https://discord.com/channels/729293205899575297/792128190276698163/${reaction.message.id})`)
   .setColor('RED')
   .setFooter(`${reaction.message.embeds[0].footer.text}`)
          .setTimestamp()
                   if (reactor.permissions.has('ADMINISTRATOR')) return channel.send(rejected)
 }
        }
});
  
}

