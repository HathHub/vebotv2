const Discord = require('discord.js');

module.exports = {
  name: 'punishments',
  description: 'Shows a list of punishments',
  execute(client, message, args){
    const { member, mentions } = message

    const rules = new Discord.MessageEmbed()
    .setColor('#3e93de')
    .setTitle(`<a:zephyap:778103356961849354> | Punishment Guidelines`)
    .setDescription("These are the Discord server punishments.")
    .addFields(
      {name: 'Being toxic/harassing others', value: '↳ Warn on first offense.\n↳ If they persist, mute for 4h ~ 12h depending on severity.' },
      {name: 'Advertising non-VE servers/in the wrong channel', value: '↳ Warn on first offense.\n↳ Mute 2h on second offense.\n↳ Mute 4h on second offense.\n↳ Ban on third offense.' },
      {name: 'Raiding other Discord servers', value: '↳ 3 day ban.' },
      {name: 'Using slurs/other offensive terms', value: '↳ 10h mute.' },
      {name: 'Offensive jokes', value: '↳ Ranges from 2h ~ 10h depending on severity.' },
      {name: 'Spamming/Flooding the chat', value: '↳ Warn on first offense.\n↳ 4h mute on second offense.' },
      {name: 'Abusing loopholes', value: '↳ Depending on severity, this could range from a 4h mute ~ permanent ban.' },
      {name: 'NSFW content', value: '↳ NSFW in text is allowed to an extent, occasional jokes are fine, but continuous NSFW discussion will be prohibited. No NSFW imageries allowed.\n↳ Warn on first offense (text).\n↳ 4h mute on second offense (text).\n↳ Ban (images/videos).' },
      {name: 'Racism/homophobia/sexism', value: ' ↳ 10h mute.' },
      {name: 'Doxing members/harassing in DMs', value: '↳ Permanent ban (this includes sending NSFW/severe death threats in DMs).'},
      {name: 'Inappropriate username/profile picture', value: '↳ Warn on first offense.\n↳ Kick on second offense.'},
      {name: 'Commands not in bot channel', value: '↳ Warn on first offense.\n↳ 10 minutes mute on second offense.'},
      {name: 'Staff disrespect', value: "↳ Warn on first offense\n↳ 2h mute on second offense\n↳ This is not to be enforced at all times, but if you feel that you're not being disrespectful, create a ticket."}
      )
    
    if(member.hasPermission('BAN_MEMBERS')){
      message.channel.send(rules);
    }

  }
}